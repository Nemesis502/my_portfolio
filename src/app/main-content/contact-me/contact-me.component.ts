import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, OnInit, Output, Renderer2 } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PopUpMessageComponent } from "./pop-up-message/pop-up-message.component";
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, PopUpMessageComponent, TranslatePipe, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss', './contact-me.component-media-query.scss']
})
/**
 * ContactMeComponent
 *
 * A standalone Angular component that provides a contact form.
 * It detects touch capability, validates user input, submits via HTTP,
 * and displays a pop-up message upon success or failure.
 *
 * @implements {OnInit}
 */
export class ContactMeComponent implements OnInit {
  /**
   * Whether the policy checkbox is checked.
   *
   * @type {boolean}
   * @memberof ContactMeComponent
   */
  buttonChecked = false;

  /**
   * Flag used for mail testing mode.
   *
   * @type {boolean}
   * @memberof ContactMeComponent
   */
  mailTest = false;

  /**
   * Whether the email input is currently hovered.
   *
   * @type {boolean}
   * @memberof ContactMeComponent
   */
  isInputHoveredEmail = false;

  /**
   * Whether the message textarea is currently hovered.
   *
   * @type {boolean}
   * @memberof ContactMeComponent
   */
  isInputHoveredMessage = false;

  /**
   * Whether the form has been submitted and is in "sent" state.
   *
   * @type {boolean}
   * @memberof ContactMeComponent
   */
  sendFormular = false;

  /**
   * Controls the pop-up animation on close/open.
   *
   * @type {boolean}
   * @memberof ContactMeComponent
   */
  animate = false;

  /**
   * Flag set to true if the current device supports touch events.
   *
   * @type {boolean}
   * @memberof ContactMeComponent
   */
  isTouchDevice = false;

  /**
   * HTTP client instance injected for form submission.
   *
   * @private
   * @type {HttpClient}
   * @memberof ContactMeComponent
   */
  private http = inject(HttpClient);

  /**
   * Contact form data model.
   *
   * @type {{ name: string; email: string; message: string }}
   * @memberof ContactMeComponent
   */
  contactData = {
    name: "",
    email: "",
    message: "",
  };

  /**
   * Configuration for the HTTP POST request.
   *
   * @type {{ endPoint: string; body: (payload: any) => string; options: { headers: { 'Content-Type': string; responseType: string } } }}
   * @memberof ContactMeComponent
   */
  post = {
    endPoint: 'https://bastianklawes.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Event emitter that outputs the dialog close status.
   *
   * @type {EventEmitter<boolean>}
   * @memberof ContactMeComponent
   */
  @Output()
  dialogClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Creates an instance of ContactMeComponent.
   *
   * @param {Renderer2} renderer Angular Renderer2 for DOM manipulations.
   * @memberof ContactMeComponent
   */
  constructor(private renderer: Renderer2) { }

  /**
   * Angular lifecycle hook.
   * Called once after the component's data-bound properties are initialized.
   * Detects whether the user's device supports touch interactions.
   *
   * @returns {void}
   * @memberof ContactMeComponent
   */
  ngOnInit(): void {
    this.isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;
  }

  /**
   * Adds or removes a CSS class on the document body to control overflow
   * when the contact form pop-up is open or closed.
   *
   * @param {boolean} isFormularSent Whether the form pop-up is currently visible.
   * @returns {void}
   * @memberof ContactMeComponent
   */
  setOverflow(isFormularSent: boolean): void {
    if (isFormularSent) {
      this.renderer.addClass(document.body, 'overflow_hidden');
    } else {
      this.renderer.removeClass(document.body, 'overflow_hidden');
    }
  }

  /**
   * Handles closing of the pop-up dialog with an animation.
   * Emits the dialogClosed event after the closing animation completes.
   *
   * @param {boolean} status The resulting visibility state of the pop-up.
   * @returns {void}
   * @memberof ContactMeComponent
   */
  logCloseDialog(status: boolean): void {
    this.animate = true;
    setTimeout(() => {
      this.sendFormular = status;
      this.setOverflow(this.sendFormular);
      this.animate = false;
      this.dialogClosed.emit(this.sendFormular);
    }, 500);
  }

  /**
   * Toggles the policy checkbox state.
   *
   * @returns {void}
   * @memberof ContactMeComponent
   */
  checkButtonPolicy(): void {
    this.buttonChecked = !this.buttonChecked;
  }

  /**
   * Validates and submits the contact form.
   * Marks invalid controls as touched if form is invalid.
   * Sends HTTP POST if valid and not in mailTest mode.
   * Resets form and shows pop-up on completion.
   *
   * @param {NgForm} ngForm The Angular form reference.
   * @returns {void}
   * @memberof ContactMeComponent
   */
  checkFormular(ngForm: NgForm): void {
    if (ngForm.invalid) {
      // Mark all controls as touched to show validation errors
      Object.keys(ngForm.controls).forEach(field => {
        const control = ngForm.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
    } else if (ngForm.submitted && ngForm.form.valid) {
      if (!this.mailTest) {
        // Submit form via HTTP
        this.http.post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        ).subscribe({
          next: () => {
            ngForm.resetForm();
          },
          error: error => {
            console.error(error);
          },
          complete: () => {
            this.sendFormular = true;
            this.setOverflow(this.sendFormular);
          }
        });
      } else {
        // Reset form immediately in mailTest mode
        ngForm.resetForm();
      }
    }
  }
}
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PopUpMessageComponent } from "./pop-up-message/pop-up-message.component";
import { timeout } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, PopUpMessageComponent, TranslatePipe],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss', './contact-me.component-media-query.scss']
})
export class ContactMeComponent implements OnInit {
  buttonChecked = false;
  mailTest = false;
  isInputHoveredEmail = false;
  isInputHoveredMessage = false;
  sendFormular = false;
  animate = false;
  isTouchDevice = false;
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

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

  ngOnInit() {
    this.isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;
  };

  logCloseDialog(status: boolean) {
    this.animate = true;
    setTimeout(() => {
      this.sendFormular = status
      this.animate = false;
    }, 500);
  }

  checkButtonPolicy() {
    // if (this.buttonChecked == false) {
    //   this.buttonChecked = true
    // } else {
    //   this.buttonChecked = false
    // }
    this.buttonChecked = !this.buttonChecked;
  }

  checkFormular(ngForm: NgForm) {
    if (ngForm.invalid) {
      Object.keys(ngForm.controls).forEach(field => {
        const control = ngForm.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
    } else {
      if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => this.sendFormular = true,
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
        ngForm.resetForm();
      }
    }

  }
}

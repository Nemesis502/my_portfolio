import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
/**
 * AboutMeComponent
 *
 * A standalone Angular component that displays an "About Me" section.  
 * It detects touch capability, runs a one-time static animation on demand,
 * and then persists an animation once the component scrolls into view.
 *
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export class AboutMeComponent implements OnInit, AfterViewInit {
  /**
   * Container element for the About Me section.
   * Used to observe its visibility in the viewport.
   *
   * @type {ElementRef<HTMLElement>}
   * @memberof AboutMeComponent
   */
  @ViewChild('aboutContainer', { static: true })
  aboutContainer!: ElementRef<HTMLElement>;

  /**
   * Image element to animate.
   *
   * @type {ElementRef<HTMLImageElement>}
   * @memberof AboutMeComponent
   */
  @ViewChild('animImg')
  animImg!: ElementRef<HTMLImageElement>;

  /**
   * Indicates whether the one-time static animation has been triggered.
   *
   * @type {boolean}
   * @memberof AboutMeComponent
   */
  animationstatic = false;

  /**
   * Indicates whether the persistent animation (triggered on intersection)
   * should remain active.
   *
   * @type {boolean}
   * @memberof AboutMeComponent
   */
  animationPersisted = false;

  /**
   * Flag set to true if the current device supports touch events.
   *
   * @type {boolean}
   * @memberof AboutMeComponent
   */
  isTouchDevice = false;

  /**
   * Angular lifecycle hook.
   * Called once, after the component's data-bound properties have been initialized.
   * Detects whether the user's device supports touch interactions.
   *
   * @returns {void}
   * @memberof AboutMeComponent
   */
  ngOnInit(): void {
    this.isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;
  }

  /**
   * Triggers the one-time static animation by setting the corresponding flag.
   *
   * @returns {void}
   * @memberof AboutMeComponent
   */
  staticAnimation(): void {
    this.animationstatic = true;
  }

  /**
   * Angular lifecycle hook.
   * Called once, after the component's view (and its child views) has been fully initialized.
   * Sets up an IntersectionObserver on the `aboutContainer` element.
   * When at least 80% of the container is visible in the viewport,
   * it enables the persistent animation and disconnects the observer.
   *
   * @returns {void}
   * @memberof AboutMeComponent
   */
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.animationPersisted = true;
            observer.disconnect();
          }
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(this.aboutContainer.nativeElement);
  }
}
import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ViewportScroller } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, TranslatePipe],
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    './landing-page.component-media-query.scss'
  ]
})
/**
 * LandingPageComponent
 *
 * A standalone Angular component representing the application's landing page.
 * Includes a navigation bar and provides smooth scrolling to anchored sections.
 */
export class LandingPageComponent {
  /**
   * Creates an instance of LandingPageComponent.
   *
   * @param {ViewportScroller} viewportScroller - Angular service used to scroll to anchor elements.
   */
  constructor(private viewportScroller: ViewportScroller) { }

  /**
   * Scrolls smoothly to the element identified by the given anchor.
   *
   * @param {string} anchor - The ID of the target element to scroll into view.
   * @returns {void}
   */
  scrollTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}

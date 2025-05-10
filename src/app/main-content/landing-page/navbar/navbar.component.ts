import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

/**
 * Configuration options for scrolling to an anchor.
 *
 * @interface Options
 */
interface Options {
  /**
   * Number of pixels to offset from the top of the viewport.
   *
   * @type {number}
   */
  offset: number;
  /**
   * Vertical alignment of the target within the viewport.
   *
   * @type {"top" | "middle" | "bottom" | undefined}
   */
  align?: "top" | "middle" | "bottom" | undefined;
  /**
   * Easing function name for the scroll animation.
   *
   * @type {string | undefined}
   */
  ease?: string | undefined;
  /**
   * Duration of the scroll animation in milliseconds.
   *
   * @type {number | undefined}
   */
  duration?: number | undefined;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslatePipe, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
/**
 * NavbarComponent
 *
 * A standalone Angular component that displays the navigation bar.
 * Supports language switching, responsive logo toggling, menu open/close,
 * body overflow control, and scrolling to page sections.
 */
export class NavbarComponent {
  /**
   * Currently selected language code.
   *
   * @type {string}
   * @memberof NavbarComponent
   */
  currentLanguage = "";

  /**
   * Whether the default logo is shown (responsive toggle).
   *
   * @type {boolean}
   * @memberof NavbarComponent
   */
  defaultResponsiveLogo = true;

  /**
   * Whether the navigation menu is closed.
   *
   * @type {boolean}
   * @memberof NavbarComponent
   */
  menuIsClose = true;

  /**
   * Whether the overlay/dialog for the mobile menu is visible.
   *
   * @type {boolean}
   * @memberof NavbarComponent
   */
  dialogVisible = false;

  /**
   * Creates an instance of NavbarComponent.
   * Initializes translation service, sets up available languages,
   * and applies the current language from local storage.
   *
   * @param {TranslateService} translate - Service for translation handling.
   * @param {ViewportScroller} viewportScroller - Service to scroll to anchors.
   * @param {Renderer2} renderer - Angular renderer for DOM manipulations.
   * @memberof NavbarComponent
   */
  constructor(
    private translate: TranslateService,
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2
  ) {
    this.translate.addLangs(['de', 'en']);
    this.checkCurrentLanguage();
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  /**
   * Reads the stored language preference from localStorage
   * and updates `currentLanguage`. Defaults to 'en' if none is set.
   *
   * @returns {void}
   * @memberof NavbarComponent
   */
  checkCurrentLanguage(): void {
    const stored = localStorage.getItem("Language");
    this.currentLanguage = stored || "en";
  }

  /**
   * Switches between 'en' and 'de', stores the new preference,
   * and applies it via TranslateService.
   *
   * @param {string} language - The language currently in use.
   * @returns {void}
   * @memberof NavbarComponent
   */
  changeLanguage(language: string): void {
    this.currentLanguage = language === 'en' ? 'de' : 'en';
    localStorage.setItem("Language", this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  /**
   * Toggles between the default and responsive logo versions.
   *
   * @returns {void}
   * @memberof NavbarComponent
   */
  changeLogo(): void {
    this.defaultResponsiveLogo = !this.defaultResponsiveLogo;
  }

  /**
   * Opens or closes the navigation menu.
   * Toggles overlay visibility and body overflow accordingly.
   *
   * @returns {void}
   * @memberof NavbarComponent
   */
  switchMenu(): void {
    this.menuIsClose = !this.menuIsClose;
    this.dialogVisible = !this.dialogVisible;
    this.setOverflow();
  }

  /**
   * Adds or removes the 'overflow_hidden' class on the <body>
   * to prevent or allow page scrolling when the menu overlay is active.
   *
   * @returns {void}
   * @memberof NavbarComponent
   */
  setOverflow(): void {
    if (!this.menuIsClose) {
      this.renderer.addClass(document.body, 'overflow_hidden');
    } else {
      this.renderer.removeClass(document.body, 'overflow_hidden');
    }
  }

  /**
   * Scrolls smoothly to the element with the given ID anchor.
   * Then closes the navigation menu and hides the overlay.
   *
   * @param {string} id - The anchor ID of the target section.
   * @returns {void}
   * @memberof NavbarComponent
   */
  scrollToSection(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
    this.menuIsClose = !this.menuIsClose;
    this.dialogVisible = !this.dialogVisible;
    this.renderer.removeClass(document.body, 'overflow_hidden');
  }
}
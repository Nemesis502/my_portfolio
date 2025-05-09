import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
/**
 * AppComponent
 *
 * The root component of the portfolio application.
 * Sets up available languages, determines the current language
 * from localStorage, and configures ngx-translate.
 */
export class AppComponent {
  /**
   * Application title, used for display or configuration.
   *
   * @type {string}
   * @memberof AppComponent
   */
  title = 'portfolio';

  /**
   * Current language code in use ('en' or 'de').
   *
   * @type {string}
   * @memberof AppComponent
   */
  language = '';

  /**
   * Creates an instance of AppComponent.
   * Initializes translation service by adding supported languages,
   * determining the current language, and applying it.
   *
   * @param {TranslateService} translate - Service for translation handling.
   * @memberof AppComponent
   */
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.language = this.checkCurrentLanguage();
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }

  /**
   * Reads the 'Language' key from localStorage to determine the
   * user's preferred language. Defaults to 'en' if none is set.
   *
   * @returns {string} The language code to use.
   * @memberof AppComponent
   */
  checkCurrentLanguage(): string {
    const stored = localStorage.getItem("Language");
    this.language = stored || "en";
    return this.language;
  }
}

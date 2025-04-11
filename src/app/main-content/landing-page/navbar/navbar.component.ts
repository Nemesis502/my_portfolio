import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentLanguage = "en"
  @Output() chosenLanguage = new EventEmitter<string>();

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  changeLanguage(language: string) {
    this.currentLanguage = language === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);
    console.log(this.currentLanguage);
    // this.chosenLanguage.emit(this.currentLanguage)
  }
}

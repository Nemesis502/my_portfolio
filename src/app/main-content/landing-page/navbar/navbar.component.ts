import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

interface Options {
  offset: number;
  align?: "top" | "middle" | "bottom" | undefined;
  ease?: string | undefined;
  duration?: number | undefined;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentLanguage = "en"
  defaultResponsiveLogo = true;
  menuIsClose = true;
  dialogVisible = false;

  constructor(private translate: TranslateService, private viewportScroller: ViewportScroller) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  changeLanguage(language: string) {
    this.currentLanguage = language === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);
  }

  changeLogo() {
    this.defaultResponsiveLogo = !this.defaultResponsiveLogo;
  }

  switchMenu() {
    this.menuIsClose = !this.menuIsClose;
    this.dialogVisible = !this.dialogVisible;
  }

  scrollToSection(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
    this.menuIsClose = !this.menuIsClose;
    this.dialogVisible = !this.dialogVisible;
  }

}

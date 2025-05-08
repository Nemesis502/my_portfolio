import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Output, output, Renderer2 } from '@angular/core';
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
  currentLanguage = ""
  defaultResponsiveLogo = true;
  menuIsClose = true;
  dialogVisible = false;

  constructor(private translate: TranslateService,
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.checkCurrentLanguage();
  }

  checkCurrentLanguage() {
    let loadedLanguage = localStorage.getItem("Language");
    this.currentLanguage = loadedLanguage || "en";
  }

  changeLanguage(language: string) {
    console.log(language);

    this.currentLanguage = language === 'en' ? 'de' : 'en';
    console.log(this.currentLanguage);

    localStorage.setItem("Language", this.currentLanguage);
    console.log(this.currentLanguage);
    
    this.translate.use(this.currentLanguage);
  }

  changeLogo() {
    this.defaultResponsiveLogo = !this.defaultResponsiveLogo;
  }

  switchMenu() {
    this.menuIsClose = !this.menuIsClose;
    this.dialogVisible = !this.dialogVisible;
    this.setOverflow()
  }

  setOverflow() {
    if (!this.menuIsClose) {
      this.renderer.addClass(document.body, 'overflow_hidden');
    } else {
      this.renderer.removeClass(document.body, 'overflow_hidden');
    }
  }

  scrollToSection(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
    this.menuIsClose = !this.menuIsClose;
    this.dialogVisible = !this.dialogVisible;
  }

}

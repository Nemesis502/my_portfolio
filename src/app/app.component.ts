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
export class AppComponent {
  title = 'portfolio';
  language = "";

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.language = this.checkCurrentLanguage();
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
    console.log(this.language);
  }

  checkCurrentLanguage(): string {
    let loadedLanguage = localStorage.getItem("Language");
    this.language = loadedLanguage || "en";
    return this.language;
  }
}

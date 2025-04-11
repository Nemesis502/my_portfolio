import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { FeaturedProjectsComponent } from "./featured-projects/featured-projects.component";
import { ReferencesComponent } from "./references/references.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, SkillsComponent, FeaturedProjectsComponent, ReferencesComponent, ContactMeComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  lang = "";

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeCurrentLanguage(lang: string): void {
    this.translate.use(lang);
  }
}

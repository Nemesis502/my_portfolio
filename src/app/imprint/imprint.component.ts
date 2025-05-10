import { Component } from '@angular/core';
import { NavbarComponent } from "../main-content/landing-page/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { LandingPageComponent } from "../main-content/landing-page/landing-page.component";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent, RouterLink, LandingPageComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
}

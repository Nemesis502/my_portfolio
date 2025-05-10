import { Component } from '@angular/core';
import { NavbarComponent } from "../main-content/landing-page/navbar/navbar.component";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
}

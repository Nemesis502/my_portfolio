import { Component } from '@angular/core';
import { NavbarComponent } from "../main-content/landing-page/navbar/navbar.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.scss'
})
export class PrivacypolicyComponent {
}

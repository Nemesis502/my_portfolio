import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NavbarComponent } from "../../../main-content/landing-page/navbar/navbar.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, RouterLink, NavbarComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  backToBegin() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

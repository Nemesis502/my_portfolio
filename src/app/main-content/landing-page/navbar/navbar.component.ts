import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentLanguage = "EN"
  changeLanguage() {
    if (this.currentLanguage == "EN") {
      this.currentLanguage = "DE"
    } else {
      this.currentLanguage = "EN"
    }
  }
}

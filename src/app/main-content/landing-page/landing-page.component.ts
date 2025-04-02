import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private viewportScroller: ViewportScroller) { }
  
  scrollTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }

}

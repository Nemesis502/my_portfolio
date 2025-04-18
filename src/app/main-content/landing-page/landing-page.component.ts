import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ViewportScroller } from '@angular/common';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent,TranslatePipe],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './landing-page.component-media-query.scss']
})
export class LandingPageComponent {

  constructor(private viewportScroller: ViewportScroller) { }
  
  scrollTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }

}

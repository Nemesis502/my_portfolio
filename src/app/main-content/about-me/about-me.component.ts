import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutContainer', { static: true })
  aboutContainer!: ElementRef<HTMLElement>;
  @ViewChild('animImg') animImg!: ElementRef<HTMLImageElement>;
  animationstatic = false
  animationPersisted = false;
  isTouchDevice = false;

  ngOnInit() {
    this.isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;
  };

  staticAnimation() {
    this.animationstatic = true;
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.animationPersisted = true;
          observer.disconnect();
        }
      }
    }, { threshold: 0.8 });
    observer.observe(this.aboutContainer.nativeElement);
  }
}

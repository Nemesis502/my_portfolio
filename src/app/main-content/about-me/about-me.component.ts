import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @ViewChild('animImg') animImg!: ElementRef<HTMLImageElement>;
  animationPersisted = false;

  staticAnimation() {
    this.animationPersisted = true;
  }
}

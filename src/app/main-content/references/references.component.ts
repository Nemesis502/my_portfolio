import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  totalReferences: number = 3;
  activeReferenceIndex: number = 0;

  nextReferences(direction: string) {
    if (direction === 'left') {
      this.activeReferenceIndex =
        (this.activeReferenceIndex - 1 + this.totalReferences) % this.totalReferences;
    } else if (direction === 'right') {
      this.activeReferenceIndex =
        (this.activeReferenceIndex + 1) % this.totalReferences;
    }
  }
}


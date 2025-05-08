import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


interface ReferencesComments {
  nameKey: string;
  rangKey: string;
  descriptionKey: string;
  id: number;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss', './references.component-media-query.scss']
})
export class ReferencesComponent implements OnInit {
  totalReferences: number = 3;
  activeReferenceIndex: number = 0;
  direction: string = "";
  animate: boolean = false;
  isTouchDevice = false;

  constructor() {
  }

  ngOnInit() {
    this.isTouchDevice = window.matchMedia('(pointer: coarse) and (hover: none)').matches;
  };

  firstReferencesComments: ReferencesComments[] = [
    {
      id: 0,
      nameKey: "references.first.name.0",
      rangKey: "references.first.rang.0",
      descriptionKey: "references.first.description.0",

    },
    {
      id: 1,
      nameKey: "references.first.name.1",
      rangKey: "references.first.rang.1",
      descriptionKey: "references.first.description.1",

    },
    {
      id: 2,
      nameKey: "references.first.name.2",
      rangKey: "references.first.rang.2",
      descriptionKey: "references.first.description.2",

    }
  ];
  secondReferencesComments: ReferencesComments[] = [
    {
      id: 0,
      nameKey: "references.first.name.1",
      rangKey: "references.first.rang.1",
      descriptionKey: "references.first.description.1",

    },
    {
      id: 1,
      nameKey: "references.first.name.2",
      rangKey: "references.first.rang.2",
      descriptionKey: "references.first.description.2",

    },
    {
      id: 2,
      nameKey: "references.first.name.0",
      rangKey: "references.first.rang.0",
      descriptionKey: "references.first.description.0",

    },

  ];
  thirdReferencesComments: ReferencesComments[] = [
    {
      id: 0,
      nameKey: "references.first.name.2",
      rangKey: "references.first.rang.2",
      descriptionKey: "references.first.description.2",

    },
    {
      id: 1,
      nameKey: "references.first.name.0",
      rangKey: "references.first.rang.0",
      descriptionKey: "references.first.description.0",

    },
    {
      id: 2,
      nameKey: "references.first.name.1",
      rangKey: "references.first.rang.1",
      descriptionKey: "references.first.description.1",

    },
  ];

  get displayedReferencesComments(): ReferencesComments[] {
    if (this.activeReferenceIndex === 0) {
      return this.firstReferencesComments;
    } else if (this.activeReferenceIndex === 1) {
      return this.secondReferencesComments;
    } else {
      return this.thirdReferencesComments;
    }
  }

  nextReferences(direction: string) {
    if (this.isTouchDevice) {
      this.mobileAnimation(direction)
    } else {
      this.desktopAnimation(direction)
    }
  }

  mobileAnimation(direction: string) {
    this.direction = direction;
    if (direction === 'left') {
      this.activeReferenceIndex =
        (this.activeReferenceIndex - 1 + this.totalReferences) % this.totalReferences;
    } else if (direction === 'right') {
      this.activeReferenceIndex =
        (this.activeReferenceIndex + 1) % this.totalReferences;
    }
  }

  desktopAnimation(direction: string) {
    this.direction = direction;
    this.animate = true;
    setTimeout(() => {
      if (direction === 'left') {
        this.activeReferenceIndex =
          (this.activeReferenceIndex - 1 + this.totalReferences) % this.totalReferences;
      } else if (direction === 'right') {
        this.activeReferenceIndex =
          (this.activeReferenceIndex + 1) % this.totalReferences;
      }
      this.animate = false;
    }, 500);
  }
}
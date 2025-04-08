import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { loadZone } from 'zone.js/lib/zone';

interface ReferencesComments {
  name: string;
  rang: string;
  comments: string;
  id: number;
}

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
  direction: string = "";
  animate: boolean = false;


  constructor() {
  }

  firstReferencesComments: ReferencesComments[] = [
    {
      name: "W.Fröhlich",
      rang: "Team Partner",
      comments: `Our project benefited enormously 
         from Bastian efficient way of
         working.`,
      id: 0
    },
    {
      name: "R.Matthes",
      rang: "Team Partner",
      comments: ` Bastian has proven to be a reliable group partner. His technical
            skills and proactive approach were crucial to the success of our
            project.`,
      id: 1
    },
    {
      name: "D.Fuhrmann",
      rang: "Team Partner",
      comments: ` I had the good fortune of working with Lukas in a group project at
            the Developer Akademie that involved a lot of effort. He always
            stayed calm, cool, and focused, and made sure our team was set up
            for success. He's super knowledgeable, easy to work with, and I'd
            happily work with him again given the chance.`,
      id: 2
    }
  ];
  secondReferencesComments: ReferencesComments[] = [
    {
      name: "R.Matthes",
      rang: "Team Partner",
      comments: ` Bastian has proven to be a reliable group partner. His technical
            skills and proactive approach were crucial to the success of our
            project.`,
      id: 0
    },
    {
      name: "D.Fuhrmann",
      rang: "Team Partner",
      comments: ` I had the good fortune of working with Lukas in a group project at
            the Developer Akademie that involved a lot of effort. He always
            stayed calm, cool, and focused, and made sure our team was set up
            for success. He's super knowledgeable, easy to work with, and I'd
            happily work with him again given the chance.`,
      id: 1
    },
    {
      name: "W.Fröhlich",
      rang: "Team Partner",
      comments: `Our project benefited enormously 
         from Bastian efficient way of
         working.`,
      id: 2
    },

  ];
  thirdReferencesComments: ReferencesComments[] = [
    {
      name: "D.Fuhrmann",
      rang: "Team Partner",
      comments: ` I had the good fortune of working with Lukas in a group project at
            the Developer Akademie that involved a lot of effort. He always
            stayed calm, cool, and focused, and made sure our team was set up
            for success. He's super knowledgeable, easy to work with, and I'd
            happily work with him again given the chance.`,
      id: 0
    },
    {
      name: "W.Fröhlich",
      rang: "Team Partner",
      comments: `Our project benefited enormously 
         from Bastian efficient way of
         working.`,
      id: 1
    },
    {
      name: "R.Matthes",
      rang: "Team Partner",
      comments: ` Bastian has proven to be a reliable group partner. His technical
            skills and proactive approach were crucial to the success of our
            project.`,
      id: 2
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


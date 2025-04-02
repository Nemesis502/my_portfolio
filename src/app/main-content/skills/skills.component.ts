import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,

  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class SkillsComponent {
  constructor(private viewportScroller: ViewportScroller) { }

  skillSet = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "JavaScript",
    },
    {
      name: "Material Design",
    },
    {
      name: "TypeScript",
    },
    {
      name: "Angular",
    },
    {
      name: "Firebase",
    },
    {
      name: "Git",
    },
    {
      name: "Rest-Api",
    },
    {
      name: "Scrum",
    },
    {
      name: "GrowthMindset",
    }
  ]

  scrollToContact(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }

}

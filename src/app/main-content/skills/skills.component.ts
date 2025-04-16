import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, ViewportScroller } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,

  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslatePipe
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class SkillsComponent {
  constructor(private viewportScroller: ViewportScroller) { }

  skillSet = [
    {
      imgName: "HTML",
      name: "HTML",
    },
    {
      imgName: "CSS",
      name: "CSS",
    },
    {
      imgName: "JavaScript",
      name: "JavaScript",
    },
    {
      imgName: "Material_Design",
      name: "Material Design",
    },
    {
      imgName: "TypeScript",
      name: "TypeScript",
    },
    {
      imgName: "Angular",
      name: "Angular",
    },
    {
      imgName: "Firebase",
      name: "Firebase",
    },
    {
      imgName: "Git",
      name: "Git",
    },
    {
      imgName: "Rest-Api",
      name: "Rest-Api",
    },
    {
      imgName: "Scrum",
      name: "Scrum",
    },
    {
      imgName: "Growth_Mindset",
      name: "Growth Mindset",
    }
  ]

  scrollToContact(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }

}

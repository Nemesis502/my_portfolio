import { Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-skills',
  standalone: true,
  
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  encapsulation: ViewEncapsulation.None
  
})
export class SkillsComponent {
  skillSet = [
    {
      skillImg: "HTML",
      name: "HTML",
    },
    {
      skillImg: "CSS",
      name: "CSS",
    },
    {
      skillImg: "JavaScript",
      name: "JavaScript",
    },
    {
      skillImg: "Material Design",
      name: "Material Design",
    },
    {
      skillImg: "TypeScript",
      name: "TypeScript",
    },
    {
      skillImg: "Angular",
      name: "Angular",
    },
    {
      skillImg: "Firebase",
      name: "Firebase",
    },
    {
      skillImg: "Git",
      name: "Git",
    },
    {
      skillImg: "Rest-Api",
      name: "Rest-Api",
    },
    {
      skillImg: "Scrum",
      name: "Scrum",
    },
    {
      skillImg: "GrowthMindset",
      name: "GrowthMindset",
    }
  ]

  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);
}

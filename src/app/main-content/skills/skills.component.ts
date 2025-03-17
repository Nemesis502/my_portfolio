import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
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

}

import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';


interface Project {
  id: number;
  name: string;
  description: string;
  namePng: string,
  technologies: { [key: string]: string },
  linkGitHub: string,
  linkLive: string,
}


@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  selectedProject: Project | null = null;
  dialogVisible = false;


  constructor(private renderer: Renderer2) { }

  projects: Project[] = [
    {
      id: 1,
      name: "Join",
      namePng: "Join",
      description: `Task manager inspired by the Kanban System. 
      Create and organize tasks using drag and drop functions, 
      assign users and categories.`,
      technologies: {
        tech1: "JavaScript",
        tech2: "HTML",
        tech3: "CSS",
        tech4: "Firebase"
      },
      linkGitHub: "https://github.com/Nemesis502/join-375",
      linkLive: "http://join-project.bastianklawes.de/",
    },
    {
      id: 2,
      name: "EL Pollo Loco",
      namePng: "EL_Pollo_Loco",
      description: `Jump, run and throw game based on object-oriented approach. 
      Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`,
      technologies: {
        tech1: "HTML",
        tech2: "CSS",
        tech3: "JavaScript"
      },
      linkGitHub: "https://github.com/Nemesis502/My-first-2D-Game-El-Pollo-Loco",
      linkLive: "https://el-pollo-loco-project.bastianklawes.de/"
    },
    {
      id: 3,
      name: "DABubble",
      namePng: "DABubble",
      description: `This App is a Slack Clone App. 
      It revolutionizes team communication and collaboration with its 
      intuitive interface, real-time messaging, and robust channel organization.`,
      technologies: {
        tech1: "Angular",
        tech2: "Firebase",
        tech3: "TypeScript"
      },
      linkGitHub: "//",
      linkLive: "",
    }
  ];

  showProjects(selectId: number) {
    if (selectId = 4) {
      return
    } else {
      this.selectedProject = this.projects.find(project => project.id === selectId) || null;
      this.dialogVisible = true;
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }

  }

  closeProjects() {
    this.dialogVisible = false;
    this.renderer.removeStyle(document.body, 'overflow');
  }

  nextProject(selectId: number) {
    selectId++;
    if (selectId > 3) {
      selectId = 0
    } else {
      this.selectedProject = this.projects.find(project => project.id === selectId) || null;
    }
  }

}

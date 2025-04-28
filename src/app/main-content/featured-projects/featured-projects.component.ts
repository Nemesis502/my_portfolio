import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


interface Project {
  id: number;
  nameKey: string;
  descriptionKey: string;
  namePng: string,
  technologies: { [key: string]: string },
  linkGitHub: string,
  linkLive: string,
}


@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [
    CommonModule, TranslatePipe
  ],
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss', './featured-projects-single-details.component.scss', './featured-projects.component-media-query.scss']
})
export class FeaturedProjectsComponent {
  selectedProject: Project | null = null;
  dialogVisible = false;


  constructor(private renderer: Renderer2) {
  }

  projects: Project[] = [
    {
      id: 1,
      nameKey: "projects.join.name",
      descriptionKey: "projects.join.description",
      namePng: "Join",
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
      nameKey: "projects.elPolloLoco.name",
      namePng: "EL_Pollo_Loco",
      descriptionKey: "projects.elPolloLoco.description",
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
      nameKey: "projects.dabubble.name",
      namePng: "DABubble",
      descriptionKey: "projects.dabubble.description",
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
    if (selectId == 4) {
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
    if (selectId > 2) {
      selectId = 0
    } else {
      this.selectedProject = this.projects.find(project => project.id === selectId) || null;
    }
  }

}

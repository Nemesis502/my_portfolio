import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Project {
  id: string;
  name: string;
  description: string;
  namePng: string,
  technologies: { [key: string]: string };
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

  dialogVisible = false;

  projects: Project[] = [
    {
      id: "01",
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
      }
    },
    {
      id: "02",
      name: "EL Pollo Loco",
      namePng: "EL_Pollo_Loco",
      description: `Jump, run and throw game based on object-oriented approach. 
      Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`,
      technologies: {
        tech1: "HTML",
        tech2: "CSS",
        tech3: "JavaScript"
      }
    },
    {
      id: "03",
      name: "DABubble",
      namePng: "DABubble",
      description: `This App is a Slack Clone App. 
      It revolutionizes team communication and collaboration with its 
      intuitive interface, real-time messaging, and robust channel organization.`,
      technologies: {
        tech1: "Angular",
        tech2: "Firebase",
        tech3: "TypeScript"
      }
    }
  ];




  // Variable für das aktuell ausgewählte Projekt
  selectedProject: Project | null = null;

  showProjects(projectId: string) {
    // Filtere das Array und wähle das Projekt anhand der ID aus
    this.selectedProject = this.projects.find(project => project.id === projectId) || null;
    this.dialogVisible = true;
    console.log('Selected project:', this.selectedProject);
  }

  closeProjects() {
    this.dialogVisible = false;
  }
}

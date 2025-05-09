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
/**
 * SkillsComponent
 *
 * A standalone Angular component that displays a list of skill icons
 * and provides a method to scroll to the contact section.
 */
export class SkillsComponent {
  /**
   * Creates an instance of SkillsComponent.
   *
   * @param {ViewportScroller} viewportScroller - Service to scroll to anchor elements.
   */
  constructor(private viewportScroller: ViewportScroller) { }

  /**
   * Array of skill entries, each with an image filename and display name.
   *
   * @type {{ imgName: string; name: string }[]}
   */
  skillSet = [
    { imgName: "HTML", name: "HTML" },
    { imgName: "CSS", name: "CSS" },
    { imgName: "JavaScript", name: "JavaScript" },
    { imgName: "Material_Design", name: "Material Design" },
    { imgName: "TypeScript", name: "TypeScript" },
    { imgName: "Angular", name: "Angular" },
    { imgName: "Firebase", name: "Firebase" },
    { imgName: "Git", name: "Git" },
    { imgName: "Rest-Api", name: "Rest-Api" },
    { imgName: "Scrum", name: "Scrum" },
    { imgName: "Growth_Mindset", name: "Growth Mindset" }
  ];

  /**
   * Scrolls smoothly to the contact section identified by the given anchor.
   *
   * @param {string} anchor - The ID of the target element to scroll into view.
   * @returns {void}
   */
  scrollToContact(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}

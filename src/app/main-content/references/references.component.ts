import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


/**
 * Represents a single reference/comment entry with internationalization keys.
 *
 * @interface ReferencesComments
 */
interface ReferencesComments {
  /** Translation key for the reference’s name. */
  nameKey: string;
  /** Translation key for the reference’s rank or position. */
  rangKey: string;
  /** Translation key for the reference’s description. */
  descriptionKey: string;
  /** Unique identifier for this reference entry. */
  id: number;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './references.component.html',
  styleUrls: [
    './references.component.scss',
    './references.component-media-query.scss'
  ]
})
/**
 * ReferencesComponent
 *
 * A standalone Angular component that displays a carousel of references/comments.
 * Detects touch capability to choose between mobile or desktop animations,
 * and allows cycling through three sets of comments.
 *
 * @implements {OnInit}
 */
export class ReferencesComponent implements OnInit {
  /** Total number of reference sets available. */
  totalReferences = 3;

  /** Index of the currently active reference set (0-based). */
  activeReferenceIndex = 0;

  /** Direction of the current animation: 'left' or 'right'. */
  direction = '';

  /** Whether a desktop animation transition is in progress. */
  animate = false;

  /** True if the current device supports touch interactions. */
  isTouchDevice = false;

  /**
   * First group of three reference comments.
   *
   * @type {ReferencesComments[]}
   * @memberof ReferencesComponent
   */
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

  /**
   * Second group of three reference comments.
   *
   * @type {ReferencesComments[]}
   * @memberof ReferencesComponent
   */
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
    }
  ];

  /**
   * Third group of three reference comments.
   *
   * @type {ReferencesComments[]}
   * @memberof ReferencesComponent
   */
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
    }
  ];

  /**
   * Angular lifecycle hook.
   * Called once after the component is initialized.
   * Detects if the device uses a coarse pointer without hover support.
   *
   * @returns {void}
   * @memberof ReferencesComponent
   */
  ngOnInit(): void {
    this.isTouchDevice = window
      .matchMedia('(pointer: coarse) and (hover: none)')
      .matches;
  }

  /**
   * Returns the array of comments to display based on the active index.
   *
   * @readonly
   * @type {ReferencesComments[]}
   * @memberof ReferencesComponent
   */
  get displayedReferencesComments(): ReferencesComments[] {
    if (this.activeReferenceIndex === 0) {
      return this.firstReferencesComments;
    } else if (this.activeReferenceIndex === 1) {
      return this.secondReferencesComments;
    }
    return this.thirdReferencesComments;
  }

  /**
   * Advances the carousel in the given direction,
   * choosing mobile or desktop animation logic based on device capability.
   *
   * @param {'left' | 'right'} direction - Direction to move the carousel.
   * @returns {void}
   * @memberof ReferencesComponent
   */
  nextReferences(direction: 'left' | 'right'): void {
    if (this.isTouchDevice) {
      this.mobileAnimation(direction);
    } else {
      this.desktopAnimation(direction);
    }
  }

  /**
   * Updates the active index immediately for touch devices.
   *
   * @param {'left' | 'right'} direction - Direction to move.
   * @returns {void}
   * @memberof ReferencesComponent
   */
  mobileAnimation(direction: 'left' | 'right'): void {
    this.direction = direction;
    if (direction === 'left') {
      this.activeReferenceIndex =
        (this.activeReferenceIndex - 1 + this.totalReferences) %
        this.totalReferences;
    } else {
      this.activeReferenceIndex =
        (this.activeReferenceIndex + 1) % this.totalReferences;
    }
  }

  /**
   * Performs a brief animation before updating the active index on desktop.
   *
   * @param {'left' | 'right'} direction - Direction to move.
   * @returns {void}
   * @memberof ReferencesComponent
   */
  desktopAnimation(direction: 'left' | 'right'): void {
    this.direction = direction;
    this.animate = true;
    setTimeout(() => {
      if (direction === 'left') {
        this.activeReferenceIndex =
          (this.activeReferenceIndex - 1 + this.totalReferences) %
          this.totalReferences;
      } else {
        this.activeReferenceIndex =
          (this.activeReferenceIndex + 1) %
          this.totalReferences;
      }
      this.animate = false;
    }, 500);
  }
}
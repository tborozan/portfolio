import { Component, Input } from '@angular/core';
import { ProjectItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({ required: true }) model!: ProjectItem;

  getFormattedFilename(): string {
    if (!this.model?.title) return 'project.bin';
    return this.model.title
      .toLowerCase()
      .replace(/[\s—–]+/g, '_')
      .replace(/[^a-z0-9_.]/g, '') + '.bin';
  }
}

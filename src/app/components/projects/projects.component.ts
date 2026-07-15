import { Component, Input, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectItem } from '../../models/portfolio.models';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input({ required: true }) model: ProjectItem[] = [];
  @ViewChild('swiper') swiperRef!: ElementRef;

  slidePrev() { this.swiperRef?.nativeElement?.swiper?.slidePrev(); }
  slideNext() { this.swiperRef?.nativeElement?.swiper?.slideNext(); }
}

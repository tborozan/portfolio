import { Component, Input, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SkillsViewModel } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @Input({ required: true }) model!: SkillsViewModel;
  @ViewChild('swiper') swiperRef!: ElementRef;

  slidePrev() { this.swiperRef?.nativeElement?.swiper?.slidePrev(); }
  slideNext() { this.swiperRef?.nativeElement?.swiper?.slideNext(); }
}

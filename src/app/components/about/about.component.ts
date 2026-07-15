import { Component, Input } from '@angular/core';
import { AboutInfo } from '../../models/portfolio.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input({ required: true }) model!: AboutInfo;
}

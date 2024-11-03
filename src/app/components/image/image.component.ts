import { Component, Input } from '@angular/core';

@Component({
  selector: 'space-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class SpaceImageComponent {
  @Input() imageUrl: string = '';
}

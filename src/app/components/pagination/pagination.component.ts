import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Observable, of } from 'rxjs';
import { SpaceImageComponent } from '../image/image.component';
import {
  IconDefinition,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    NgClass,
    SpaceImageComponent,
    FontAwesomeModule,
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  public pagesCount$: Observable<number[]> = of([1, 2, 3]);
  public arrowLeftIcon: IconDefinition = faChevronLeft;
  public arrowRightIcon: IconDefinition = faChevronRight;
  public currentPage: number = 0;

  public changePage(action: string, maxPageCount: number): void {
    if (action === 'next' && this.currentPage < maxPageCount - 1) {
      this.currentPage = this.currentPage + 1;
    }
    if (action === 'previouse' && this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
    }
    if (action === 'setPage') {
      this.currentPage = maxPageCount;
    }
  }
}

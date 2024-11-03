import { Component, inject } from '@angular/core';
import { SpaceDevApiService } from '../../services/space-dev-api/space-dev-api.service';
import { AsyncPipe, DatePipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { FilterComponent } from '../../components/filter/filter.component';
import { SpaceImageComponent } from '../../components/image/image.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faRocket } from '@fortawesome/free-solid-svg-icons';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-space-launches-page',
  standalone: true,
  imports: [
    AsyncPipe,
    FilterComponent,
    FilterComponent,
    NgIf,
    NgForOf,
    JsonPipe,
    SpaceImageComponent,
    FontAwesomeModule,
    DatePipe,
    PaginationComponent,
  ],
  templateUrl: './space-launches-page.component.html',
  styleUrl: './space-launches-page.component.css',
})
export class SpaceLaunchesPageComponent {
  private spaceDevService = inject(SpaceDevApiService);
  public spaceDevData$ = this.spaceDevService.getListOfSpaceLanches()
  public spaceDevLocations$ = this.spaceDevService.getListOfLocations();
  public iconName: IconDefinition = faRocket;

  filterData(filters: any) {
    filters.length
      ? (this.spaceDevData$ =
          this.spaceDevService.filterListOfSpaceLaunches(filters))
      : (this.spaceDevData$ = this.spaceDevService.getListOfSpaceLanches());
  }
}

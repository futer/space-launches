import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
} from '@ng-select/ng-select';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    NgLabelTemplateDirective,
    NgOptionTemplateDirective,
    NgSelectComponent,
    JsonPipe,
    FormsModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() locations: any = [];
  @Output() filtersData = new EventEmitter<string>();
  public selectedItems: any = [];

  public setSelectedItems(item: string) {
    this.filtersData.emit(item);
  }
}

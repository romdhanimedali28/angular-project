import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchKeyword: string = '';
  selectedPropertyType: string = '';
  selectedLocation: string = '';

  @Output() searchEvent = new EventEmitter<{ keyword: string, propertyType: string, location: string }>();

  onSearch(): void {
    this.searchEvent.emit({
      keyword: this.searchKeyword,
      propertyType: this.selectedPropertyType,
      location: this.selectedLocation
    });
  }
}

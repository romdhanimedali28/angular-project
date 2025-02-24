import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchName: string = ''; // For the "Search by Name" input
  selectedAddress: string = ''; // For the "Address" dropdown
  selectedStatus: string = ''; // For the "Status" dropdown

  @Output() searchEvent = new EventEmitter<{ name: string, address: string, status: string }>();

  onSearch(): void {
    this.searchEvent.emit({
      name: this.searchName,
      address: this.selectedAddress,
      status: this.selectedStatus
    });
  }
}

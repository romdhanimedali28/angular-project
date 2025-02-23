import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Residence } from 'src/app/core/models/residence.model';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  @Input() residence!: Residence;
  @Input() isFavorited: boolean = false;
  @Output() addToFavorites = new EventEmitter<Residence>();

  onFavoriteToggle(): void {
    this.addToFavorites.emit(this.residence);
  }

}

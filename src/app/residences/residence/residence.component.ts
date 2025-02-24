import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Residence } from 'src/app/core/models/residence.model';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  @Input() residence!: Residence; // Entrée : Résidence à afficher
  @Input() isFavorited: boolean = false; // Entrée : Indique si la résidence est favorisée
  @Output() addToFavorites = new EventEmitter<Residence>(); // Sortie : Événement pour ajouter/supprimer des favoris

  // Méthode pour émettre l'événement addToFavorites
  onFavoriteToggle(): void {
    this.addToFavorites.emit(this.residence);
  }
}

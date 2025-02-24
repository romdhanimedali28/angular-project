import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../../core/services/apartments.service';
import { Apartment } from '../../core/models/apartment.model';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[] = []; // Liste des appartements

  constructor(private apartmentsService: ApartmentsService) {}

  ngOnInit(): void {
    // Récupérer tous les appartements au chargement du composant
    this.apartments = this.apartmentsService.getAllApartments();
  }
}

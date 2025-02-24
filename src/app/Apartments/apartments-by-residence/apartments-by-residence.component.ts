import { Component, Input, OnInit } from '@angular/core';
import { ApartmentsService } from '../../core/services/apartments.service';
import { Apartment } from '../../core/models/apartment.model';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {
  @Input() residenceId!: number;
  apartments: Apartment[] = [];

  constructor(private apartmentsService: ApartmentsService) {}

  ngOnInit(): void {
    if (this.residenceId) {
      this.getApartmentsByResidenceId(this.residenceId);
    }
  }

  getApartmentsByResidenceId(residenceId: number): void {
    this.apartments = this.apartmentsService.getApartmentsByResidenceId(residenceId);
  }
}

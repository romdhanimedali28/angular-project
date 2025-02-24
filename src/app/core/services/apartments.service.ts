import { Injectable } from '@angular/core';
import { Apartment } from '../models/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {
  private apartments: Apartment[] = [];

  getApartmentsByResidenceId(residenceId: number): Apartment[] {
    return this.apartments.filter(apartment => apartment.residenceId === residenceId);
  }

  addApartment(apartment: Apartment): void {
    this.apartments.push(apartment);
  }

  getAllApartments(): Apartment[] {
    return this.apartments;
  }


}

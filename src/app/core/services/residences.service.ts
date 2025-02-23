import { Injectable } from '@angular/core';
import { Residence } from '../models/residence.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Service disponible globalement dans toute l'application
})
export class ResidencesService {
  private residences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/im1.jpg',
      status: 'Disponible',
      price: 15000,
      size: 1200,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/im2.jpg',
      status: 'Disponible',
      price: 18000,
      size: 1400,
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/im3.jpg',
      status: 'Vendu',
      price: 12500,
      size: 1000,
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'Inconnu',
      image: '../../assets/images/im1.jpg', //D:\S2\Angular\project\learnproject\src\assets\images\im1.jpg
      status: 'En Construction',
      price: 20000,
      size: 1600,
      bedrooms: 5,
      bathrooms: 4,
    },
  ];


  getResidences(): Residence[] {
    return this.residences;
  }

  getResidenceById(id: number): Residence {
    const residence = this.residences.find(res => res.id === id);
    if (!residence) {
      throw new Error('Résidence non trouvée');
    }
    return residence;
  }



  addResidence(residence: Residence): void {
    this.residences.push(residence);
  }

  updateResidence(residence: Residence): void {
    const index = this.residences.findIndex(res => res.id === residence.id);
    if (index === -1) {
      throw new Error('Résidence non trouvée');
    }
    this.residences[index] = residence;
  }

}

import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Residence } from '../core/models/residence.model';
import { ResidencesService } from '../core/services/residences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {

  listResidences: Residence[] = [];
  filteredResidences: Residence[] = [];
  searchTerm: string = '';
  constructor(private residencesService: ResidencesService , private router: Router) { }

  ngOnInit(): void {
    this.listResidences = this.residencesService.getResidences();
    this.filteredResidences = this.listResidences; // Initially, display all residences
    console.log('Le composant a été initialisé');

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }


  showLocation(residence: Residence) {
    if (residence.address === 'Inconnu') {
      alert('L\'adresse de cette résidence est inconnue');
    } else {
      alert('L\'adresse est : ' + residence.address);
    }
  }

  favoriteResidences: Residence[] = [];

  handleAddToFavorites(residence: Residence): void {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
    }else{
      const index = this.favoriteResidences.indexOf(residence);
      if (index > -1) {
        this.favoriteResidences.splice(index, 1);
      }    }
  }

  onSearch(searchCriteria: { name: string, address: string, status: string }): void {
    this.filteredResidences = this.listResidences.filter(residence => {
      const matchesName = searchCriteria.name ? residence.name.toLowerCase().includes(searchCriteria.name.toLowerCase()) : true;
      const matchesAddress = searchCriteria.address ? residence.address === searchCriteria.address : true;
      const matchesStatus = searchCriteria.status ? residence.status === searchCriteria.status : true;

      return matchesName && matchesAddress && matchesStatus;
    });
  }


  navigateToDetails(residenceId: number) {
    console.log(residenceId);
    this.router.navigate(['/residence', residenceId]);
  }

}

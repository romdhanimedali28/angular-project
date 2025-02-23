import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidencesService } from '../../core/services/residences.service';
import { Residence } from 'src/app/core/models/residence.model';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;
  residence!: Residence;
  constructor(private route: ActivatedRoute , private router: Router , private residencesService: ResidencesService ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    id ? this.getResidenceDetails(+id) : alert('cette résidence est inconnue');
  }


  getResidenceDetails(id: number): void {
  this.residence =  this.residencesService.getResidenceById(id);
}


}

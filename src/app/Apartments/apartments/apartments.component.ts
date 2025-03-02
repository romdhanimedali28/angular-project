import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../../core/services/apartments.service';
import { Apartment } from '../../core/models/apartment.model';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[] = [];
  sameSurfaceCount : number =0 ;
  constructor(private apartmentsService: ApartmentsService,private commonService: CommonService) {}

  ngOnInit(): void {
    this.apartments = this.apartmentsService.getAllApartments();
    this.sameSurfaceCount = this.commonService.getSameValueOf(
      this.apartments,
      'surface',
      100
    );
    console.log("number of surface", this.sameSurfaceCount);


  }
}

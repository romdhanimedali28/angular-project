import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from '../../core/models/apartment.model';
import { ApartmentsService } from 'src/app/core/services/apartments.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  apartmentForm: FormGroup;
  residenceId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apartmentsService: ApartmentsService
  ) {
    this.apartmentForm = this.fb.group({
      apartNum: [null, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      floorNum: [null, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      surface: [null, Validators.required],
      terrace: ['true', Validators.required],
      surfaceTerrace: [null],
      category: ['S+1', Validators.required]
    });
  }

  ngOnInit(): void {
    this.residenceId = +this.route.snapshot.paramMap.get('id')!;

    this.apartmentForm.get('terrace')?.valueChanges.subscribe((value) => {
      if (value === 'true') {
        this.apartmentForm.get('surfaceTerrace')?.setValidators([Validators.required]);
      } else {
        this.apartmentForm.get('surfaceTerrace')?.clearValidators();
      }
      this.apartmentForm.get('surfaceTerrace')?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.apartmentForm.valid) {
      const newApartment: Apartment = {
        ...this.apartmentForm.value,
        residenceId: this.residenceId
      };
      this.apartmentsService.addApartment(newApartment);
      this.router.navigate(['/apartments']);
    }
  }

  onReset(): void {
    this.apartmentForm.reset({
      terrace: 'true', 
      category: 'S+1'
    });
  }
}

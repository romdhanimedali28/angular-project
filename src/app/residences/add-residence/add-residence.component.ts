import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence.model';
import { ResidencesService } from 'src/app/core/services/residences.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residenceForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null; 
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private residencesService: ResidencesService,
    private router: Router
  ) {
    // Initialize the form
    this.residenceForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      image: [null, Validators.required], // Store the file object
      status: ['Disponible', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      size: [null, [Validators.required, Validators.min(0)]],
      bedrooms: [null, [Validators.required, Validators.min(0)]],
      bathrooms: [null, [Validators.required, Validators.min(0)]]
    });
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Display image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);

      // Update the form control with the file
      this.residenceForm.patchValue({ image: this.selectedFile });
      this.residenceForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.residenceForm.valid) {
      // Generate a new ID for the residence
      const newId = this.residencesService.getResidences().length + 1;

      // Create a new Residence object
      const newResidence: Residence = {
        id: newId,
        ...this.residenceForm.value,
        image: this.imagePreview as string // Use the image preview URL
      };

      // Add the new residence to the list
      this.residencesService.addResidence(newResidence);

      // Navigate back to the residences list
      this.router.navigate(['/residences']);
    }
  }
}

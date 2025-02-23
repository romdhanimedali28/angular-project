import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form in the constructor
    this.myForm = this.fb.group({
      selectedOption: ['option1']  // Set default radio button to 'option1'
    });
  }

}

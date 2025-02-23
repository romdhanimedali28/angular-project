import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FilterByAddressPipe } from './filter-by-address.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HeadherComponent } from './headher/headher.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { ResidenceComponent } from './residences/residence/residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    FilterByAddressPipe,
    ResidenceComponent,
    SearchComponent,
    HeadherComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

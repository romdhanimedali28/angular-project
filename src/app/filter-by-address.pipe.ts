import { Pipe, PipeTransform } from '@angular/core';
import { Residence } from '../app/core/models/residence.model';

@Pipe({
  name: 'filterByAddress',
})
export class FilterByAddressPipe implements PipeTransform {
  transform(residences: Residence[], searchTerm: string): Residence[] {
    if (!searchTerm) {
      return residences;
    }
    return residences.filter((residence) =>
      residence.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

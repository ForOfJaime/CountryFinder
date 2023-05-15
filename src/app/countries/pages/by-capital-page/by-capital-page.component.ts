import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];


  constructor(private countriesService: CountriesService) {}

  searchByCapital( tern: string ):void{
    this.countriesService.searchCapital(tern).subscribe( countries => {this.countries = countries});
  }

}

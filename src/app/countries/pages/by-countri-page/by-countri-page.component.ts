import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-countri-page',
  templateUrl: './by-countri-page.component.html',
  styles: [
  ]
})
export class ByCountriPageComponent {

  public countries: Country[] = [];


  constructor(private countriesService: CountriesService) {}

  searchBycountry( tern: string ):void{
    this.countriesService.searchCountry(tern).subscribe( countries => {this.countries = countries});
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
      .toLowerCase()
      .includes(
        searchText.toLowerCase()
      ));
    }

    showDetails() {
      console.log('showDetails()')
      let x: any = document.getElementById("details-panel");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };

}

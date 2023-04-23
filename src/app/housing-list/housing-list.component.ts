import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  showDetails: boolean = false;

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

  if (showDetails: boolean) {
    console.log(`showDetails triggered in housing-list.component.ts: ${showDetails}`)
    // activate displayDetails() in details-panel
  }
}

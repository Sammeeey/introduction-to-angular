import { Component, OnInit, Input, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.css']
})
export class DetailsPanelComponent implements OnInit {

  @Input() showD: boolean = false;
  @Input() showDetailsInDetailsPanel: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  detailResults: HousingLocation[] = [];

  displayDetails(detailLocationName: string) {
    // filter housingLocationList results by name of location
    // check if any of the items' names in the list match detailLocationName
    if (!detailLocationName) return;
    this.detailResults = this.housingLocationList.filter(
      (location: HousingLocation) => location.name
      .toLowerCase()
      .includes(
        detailLocationName.toLowerCase()
      ));    
    // this.detailName = this.housingLocationList.find(locationObj => detailLocationName === locationObj.name)
    
    console.log(this.detailResults)
      }
}

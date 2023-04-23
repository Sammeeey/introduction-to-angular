import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { DetailsPanelComponent } from './details-panel/details-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    DetailsPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

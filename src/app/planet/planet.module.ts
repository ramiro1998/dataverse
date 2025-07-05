import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetRoutingModule } from './planet-routing.module';
import { PlanetListComponent } from './pages/planet-list/planet-list.component';
import { ResourceListModule } from '../shared/resource-list/resource-list.module';


@NgModule({
  declarations: [
    PlanetListComponent
  ],
  imports: [
    CommonModule,
    PlanetRoutingModule,
    ResourceListModule
  ]
})
export class PlanetModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetRoutingModule } from './planet-routing.module';
import { PlanetListComponent } from './pages/planet-list/planet-list.component';
import { ResourceListModule } from '../shared/resource-list/resource-list.module';
import { PlanetDetailComponent } from './pages/planet-detail/planet-detail.component';
import { ResourceDetailModule } from '../shared/resource-detail/resource-detail.module';


@NgModule({
  declarations: [
    PlanetListComponent,
    PlanetDetailComponent
  ],
  imports: [
    CommonModule,
    PlanetRoutingModule,
    ResourceListModule,
    ResourceDetailModule
  ]
})
export class PlanetModule { }

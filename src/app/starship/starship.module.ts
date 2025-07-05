import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipRoutingModule } from './starship-routing.module';
import { ResourceListModule } from '../shared/resource-list/resource-list.module';
import { StarshipListComponent } from './pages/starship-list/starship-list.component';


@NgModule({
  declarations: [
    StarshipListComponent
  ],
  imports: [
    CommonModule,
    StarshipRoutingModule,
    ResourceListModule
  ]
})
export class StarshipModule { }

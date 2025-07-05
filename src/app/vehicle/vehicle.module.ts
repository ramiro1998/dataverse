import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { ResourceListModule } from '../shared/resource-list/resource-list.module';


@NgModule({
  declarations: [
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    ResourceListModule
  ]
})
export class VehicleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { ResourceListModule } from '../shared/resource-list/resource-list.module';
import { ResourceDetailModule } from '../shared/resource-detail/resource-detail.module';
import { VehicleDetailComponent } from './pages/vehicle-detail/vehicle-detail.component';


@NgModule({
  declarations: [
    VehicleListComponent,
    VehicleDetailComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    ResourceListModule,
    ResourceDetailModule
  ]
})
export class VehicleModule { }

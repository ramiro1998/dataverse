import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecieRoutingModule } from './specie-routing.module';
import { SpecieListComponent } from './pages/specie-list/specie-list.component';
import { ResourceListModule } from '../shared/resource-list/resource-list.module';


@NgModule({
  declarations: [
    SpecieListComponent
  ],
  imports: [
    CommonModule,
    SpecieRoutingModule,
    ResourceListModule
  ]
})
export class SpecieModule { }

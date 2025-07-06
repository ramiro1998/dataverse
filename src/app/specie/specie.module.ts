import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecieRoutingModule } from './specie-routing.module';
import { SpecieListComponent } from './pages/specie-list/specie-list.component';
import { ResourceListModule } from '../shared/resource-list/resource-list.module';
import { SpecieDetailComponent } from './pages/specie-detail/specie-detail.component';
import { ResourceDetailModule } from '../shared/resource-detail/resource-detail.module';


@NgModule({
  declarations: [
    SpecieListComponent,
    SpecieDetailComponent
  ],
  imports: [
    CommonModule,
    SpecieRoutingModule,
    ResourceListModule,
    ResourceDetailModule
  ]
})
export class SpecieModule { }

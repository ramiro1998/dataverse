import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipRoutingModule } from './starship-routing.module';
import { ResourceListModule } from '../shared/resource-list/resource-list.module';
import { StarshipListComponent } from './pages/starship-list/starship-list.component';
import { ResourceDetailModule } from '../shared/resource-detail/resource-detail.module';
import { StarshipDetailComponent } from './pages/starship-detail/starship-detail.component';


@NgModule({
  declarations: [
    StarshipListComponent,
    StarshipDetailComponent
  ],
  imports: [
    CommonModule,
    StarshipRoutingModule,
    ResourceListModule,
    ResourceDetailModule
  ]
})
export class StarshipModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { ResourceListModule } from '../shared/resource-list/resource-list.module';


@NgModule({
  declarations: [
    FilmListComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    ResourceListModule
  ]
})
export class FilmModule { }

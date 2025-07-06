import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { ResourceListModule } from '../shared/resource-list/resource-list.module';
import { FilmDetailComponent } from './pages/film-detail/film-detail.component';
import { ResourceDetailModule } from '../shared/resource-detail/resource-detail.module';


@NgModule({
  declarations: [
    FilmListComponent,
    FilmDetailComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    ResourceListModule,
    ResourceDetailModule
  ]
})
export class FilmModule { }

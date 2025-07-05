import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PeopleDetailComponent } from './pages/people-detail/people-detail.component';
import { CardModule } from '../shared/card/card.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterModule } from '../shared/filter/filter.module';


@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleDetailComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CardModule,
    HttpClientModule,
    FilterModule
  ]
})
export class PeopleModule { }

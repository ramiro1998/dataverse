import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceListComponent } from './resource-list.component';
import { FilterModule } from '../filter/filter.module';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    ResourceListComponent
  ],
  imports: [
    CommonModule,
    FilterModule,
    CardModule
  ],
  exports: [ResourceListComponent]
})
export class ResourceListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceDetailComponent } from './resource-detail.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations: [
    ResourceDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [ResourceDetailComponent]
})
export class ResourceDetailModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ResourceService } from './services/resource.service';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    TruncatePipe
  ],
  providers: [ResourceService],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [TruncatePipe]
})
export class CoreModule { }

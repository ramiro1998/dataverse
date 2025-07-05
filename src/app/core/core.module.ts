import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ResourceService } from './services/resource.service';



@NgModule({
    declarations: [],
    providers: [ResourceService],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';

const routes: Routes = [
  {
    path: '', component: VehicleListComponent,
    resolve: {
      resourceData: ResourceResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }

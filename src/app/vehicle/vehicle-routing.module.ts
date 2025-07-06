import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';
import { VehicleDetailComponent } from './pages/vehicle-detail/vehicle-detail.component';
import { ResourceDetailResolver } from '../core/resolvers/resource-detail.resolver';

const routes: Routes = [
  {
    path: '', component: VehicleListComponent,
    resolve: {
      resourceData: ResourceResolver
    }
  },
  {
    path: ':id', component: VehicleDetailComponent,
    resolve: {
      vehicles: ResourceDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }

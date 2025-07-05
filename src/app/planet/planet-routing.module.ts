import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './pages/planet-list/planet-list.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';

const routes: Routes = [
  {
    path: '', component: PlanetListComponent,
    resolve: {
      resourceData: ResourceResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }

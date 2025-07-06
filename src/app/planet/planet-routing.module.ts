import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './pages/planet-list/planet-list.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';
import { ResourceDetailResolver } from '../core/resolvers/resource-detail.resolver';
import { PlanetDetailComponent } from './pages/planet-detail/planet-detail.component';

const routes: Routes = [
  {
    path: '', component: PlanetListComponent,
    resolve: {
      resourceData: ResourceResolver
    }
  },
  {
    path: ':id', component: PlanetDetailComponent,
    resolve: {
      planets: ResourceDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }

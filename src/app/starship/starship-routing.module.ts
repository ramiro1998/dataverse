import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipListComponent } from './pages/starship-list/starship-list.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';
import { StarshipDetailComponent } from './pages/starship-detail/starship-detail.component';
import { ResourceDetailResolver } from '../core/resolvers/resource-detail.resolver';

const routes: Routes = [
  {
    path: '', component: StarshipListComponent,
    resolve: {
      resourceData: ResourceResolver
    }
  },
  {
    path: ':id', component: StarshipDetailComponent,
    resolve: {
      starships: ResourceDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipListComponent } from './pages/starship-list/starship-list.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';

const routes: Routes = [
  {
    path: '', component: StarshipListComponent,
    resolve: {
      resourceData: ResourceResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }

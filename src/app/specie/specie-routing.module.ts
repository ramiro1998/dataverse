import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecieListComponent } from './pages/specie-list/specie-list.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';
import { SpecieDetailComponent } from './pages/specie-detail/specie-detail.component';
import { ResourceDetailResolver } from '../core/resolvers/resource-detail.resolver';

const routes: Routes = [
  {
    path: '', component: SpecieListComponent,
    resolve: {
      resourceData: ResourceResolver
    }
  },
  {
    path: ':id', component: SpecieDetailComponent,
    resolve: {
      species: ResourceDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecieRoutingModule { }

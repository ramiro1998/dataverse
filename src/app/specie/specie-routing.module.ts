import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecieListComponent } from './pages/specie-list/specie-list.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';

const routes: Routes = [
  {
    path: '', component: SpecieListComponent,
    resolve: {
      resourceData: ResourceResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecieRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';

const routes: Routes = [{
  path: '', component: FilmListComponent,
  resolve: {
    resourceData: ResourceResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }

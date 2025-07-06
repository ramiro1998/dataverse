import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';
import { FilmDetailComponent } from './pages/film-detail/film-detail.component';
import { ResourceDetailResolver } from '../core/resolvers/resource-detail.resolver';

const routes: Routes = [{
  path: '', component: FilmListComponent,
  resolve: {
    resourceData: ResourceResolver
  }
},
{
  path: ':id', component: FilmDetailComponent,
  resolve: {
    films: ResourceDetailResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }

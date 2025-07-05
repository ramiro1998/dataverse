import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PeopleDetailComponent } from './pages/people-detail/people-detail.component';
import { ResourceResolver } from '../core/resolvers/resource.resolver';

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent,
    resolve: {
      resourceData: ResourceResolver
    }
  },
  { path: ':id', component: PeopleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }

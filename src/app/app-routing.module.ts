import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
  { path: 'starships', loadChildren: () => import('./starship/starship.module').then(m => m.StarshipModule) },
  { path: 'planets', loadChildren: () => import('./planet/planet.module').then(m => m.PlanetModule) },
  { path: 'species', loadChildren: () => import('./specie/specie.module').then(m => m.SpecieModule) },
  { path: 'vehicles', loadChildren: () => import('./vehicle/vehicle.module').then(m => m.VehicleModule) },
  { path: 'films', loadChildren: () => import('./film/film.module').then(m => m.FilmModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { MoviesDetailsEditComponent } from './movies/movies-details-edit/movies-details-edit.component';
import { ActorsResolver } from './core/actors/actors.resolver';
import { WritersDetailsComponent } from './writers/writers-details/writers-details.component';
import { WritersHomeComponent } from './writers/writers-home/writers-home.component';
import { DirectorsDetailsComponent } from './directors/directors-details/directors-details.component';
import { DirectorsHomeComponent } from './directors/directors-home/directors-home.component';
import { ActorsDetailsComponent } from './actors/actors-details/actors-details.component';
import { ActorsHomeComponent } from './actors/actors-home/actors-home.component';
import { WritersComponent } from './writers/writers.component';
import { DirectorsComponent } from './directors/directors.component';
import { ActorsComponent } from './actors/actors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesHomeComponent } from './movies/movies-home/movies-home.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { AddMovieGuard } from '@/app/movies/guards/add-movie.guard';
import { UnsavedChangesGuard } from '@/app/movies/guards/unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      { path: '', component: MoviesHomeComponent },
      {
        path: 'new',
        component: MoviesDetailsEditComponent,
        data: { mode: 'add' },
        canActivate: [AddMovieGuard],
        canDeactivate: [UnsavedChangesGuard]
      },
      { path: ':movieId', component: MoviesDetailsComponent },
      {
        path: ':movieId/details',
        component: MoviesDetailsEditComponent,
        data: { mode: 'edit' },
        canDeactivate: [UnsavedChangesGuard]
      },
    ]
  },
  {
    path: 'actors',
    component: ActorsComponent,
    resolve: {
      actors: ActorsResolver,
    },
    children: [
      { path: '', component: ActorsHomeComponent },
      { path: ':actorId', component: ActorsDetailsComponent },
    ]
  },
  {
    path: 'directors',
    component: DirectorsComponent,
    children: [
      { path: '', component: DirectorsHomeComponent },
      { path: ':directorId', component: DirectorsDetailsComponent },
    ]
  },
  {
    path: 'writers',
    component: WritersComponent,
    children: [
      { path: '', component: WritersHomeComponent },
      { path: ':writerId', component: WritersDetailsComponent },
    ]
  },
  {
    path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { UserComponent } from '@/app/settings/user/user.component';
import { DatabaseComponent } from '@/app/settings/database/database.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'database',
        component: DatabaseComponent,
      },
      {
        path: 'storage',
        loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule),
      },
      { path: '', redirectTo: 'user', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}

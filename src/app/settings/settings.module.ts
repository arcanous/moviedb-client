import { SettingsRoutingModule } from './settings-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { UserComponent } from './user/user.component';
import { DatabaseComponent } from './database/database.component';



@NgModule({
  declarations: [SettingsComponent, UserComponent, DatabaseComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
  ]
})
export class SettingsModule { }

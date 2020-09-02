import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './storage.component';
import { StorageRoutingModule } from './storage-routing.module';



@NgModule({
  declarations: [StorageComponent],
  imports: [
    CommonModule,
    StorageRoutingModule
  ]
})
export class StorageModule { }

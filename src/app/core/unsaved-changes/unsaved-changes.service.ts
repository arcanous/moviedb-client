import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesService {

  hasUnsavedChanges = false;

  constructor() { }
}

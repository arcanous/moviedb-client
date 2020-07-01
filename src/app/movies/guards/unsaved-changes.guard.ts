import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UnsavedChangesService } from '@/app/core/unsaved-changes/unsaved-changes.service';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<unknown> {
  constructor(private unsavedChanges: UnsavedChangesService) { }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if (this.unsavedChanges.hasUnsavedChanges) {
    //   return confirm('You have unsaved changes. Are you sure you want to navigate away?');
    // } else {
      return true;
    // }
  }

}

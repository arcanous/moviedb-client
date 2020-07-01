import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetUnsavedChanges } from '@/app/app.actions';


@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<unknown> {
  constructor(private store: Store) { }

  canDeactivate(): boolean {
    const unsavedChanges = this.store.selectSnapshot(store => store.app.unsavedChanges);

    if (unsavedChanges) {
      const answer = confirm('You have unsaved changes. Are you sure you want to navigate away?');
      if (answer) {
        this.store.dispatch(new SetUnsavedChanges(false));
      }

      return answer;
    } else {
      return true;
    }
  }

}

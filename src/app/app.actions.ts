export class SetUnsavedChanges {
  static readonly type = '[AppState] Set Unsaved Changes';
  constructor(public unsavedChanges: boolean) {}
}

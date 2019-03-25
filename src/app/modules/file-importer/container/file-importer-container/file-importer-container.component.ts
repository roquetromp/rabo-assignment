import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromIssueState from '../../../../store/state/issue.state';
import { Import } from '../../../../store/actions/issue.actions';

@Component({
  selector: 'rabo-file-importer-container',
  template: `<rabo-file-importer (fileSubmit)="importFile($event)"></rabo-file-importer>`,
})
export class FileImporterContainerComponent implements OnInit {

  constructor(private store: Store<fromIssueState.State>) { }

  ngOnInit() {
  }

  importFile(file: File) {
    this.store.dispatch(new Import(file));
  }
}

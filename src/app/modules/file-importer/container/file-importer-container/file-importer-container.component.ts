import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromIssueState from '../../../../store/state/issue.state';
import { Import } from '../../../../store/actions/issue.actions';

@Component({
  selector: 'rabo-file-importer-container',
  templateUrl: './file-importer-container.component.html',
})
export class FileImporterContainerComponent implements OnInit {

  constructor(private store: Store<fromIssueState.State>) { }

  ngOnInit() {
  }

  importFile(file: File) {
    this.store.dispatch(new Import(file));
  }
}

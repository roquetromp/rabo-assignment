import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromIssueState from '../../../../store/state/issue.state';
import { Import } from '../../../../store/actions/issue.actions';
import { Observable } from 'rxjs';
import { Issue } from '../../../../models/issue.model';

@Component({
  selector: 'rabo-file-importer-container',
  templateUrl: './file-importer-container.component.html',
  styleUrls: ['./file-importer-container.component.sass']
})
export class FileImporterContainerComponent implements OnInit {
  
  constructor(private store:Store<fromIssueState.State>) { }

  ngOnInit() {
  }

  importFile(file:File) {
    this.store.dispatch(new Import(file));
  }
}

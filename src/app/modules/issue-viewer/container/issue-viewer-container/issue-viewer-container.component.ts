import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromIssueState from '../../../../store/state/issue.state';
import * as fromIssueSelectors from '../../../../store/selectors/issue.selectors';
import { Observable } from 'rxjs';
import { Issue } from '../../../../models/issue.model';

@Component({
  selector: 'rabo-issue-viewer-container',
  template: `<rabo-issue-viewer
                [issues]="issues$ | async">
            </rabo-issue-viewer>`
})
export class IssueViewerContainerComponent implements OnInit {
  issues$: Observable<Issue[]>;
  constructor(private store: Store<fromIssueState.State>) { }

  ngOnInit() {

    this.issues$ = this.store.pipe(select(fromIssueSelectors.getIssues));
  }
}

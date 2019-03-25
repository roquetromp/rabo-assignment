import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../../../../models/issue.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'rabo-issue-viewer',
  templateUrl: './issue-viewer.component.html',
  styleUrls: ['./issue-viewer.component.scss']
})
export class IssueViewerComponent implements OnInit {
  @Input() issues: Issue[];
  filterCount = 0;

  filterForm: FormGroup = new FormGroup({
    filterCount: new FormControl(0),
  });

  constructor() { }

  ngOnInit() {
  }

  filterIssues() {
    this.filterCount = this.filterForm.get('filterCount').value;
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Issue } from '../../../../models/issue.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'rabo-issue-viewer',
  templateUrl: './issue-viewer.component.html',
  styleUrls: ['./issue-viewer.component.scss']
})
export class IssueViewerComponent implements OnInit {
  @Input() issues: Issue[];
  @Output() onFilterIssues: EventEmitter<number> = new EventEmitter<number>();

  filterForm: FormGroup = new FormGroup({
    filterCount: new FormControl(0)
  })

  constructor() { }

  ngOnInit() {
  }

  filterIssues() {
    console.log('filter issues', this.filterForm.get('filterCount').value)
    this.onFilterIssues.emit(this.filterForm.get('filterCount').value)
  }

}

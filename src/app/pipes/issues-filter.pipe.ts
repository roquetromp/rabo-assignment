import { Pipe, PipeTransform } from '@angular/core';
import { Issue } from '../models/issue.model';

@Pipe({
  name: 'issuesFilter'
})
export class IssuesFilterPipe implements PipeTransform {

  transform(issues: Issue[], minCount: number): Issue[] {

    return issues.filter(issue => issue.issueCount > minCount);
  }

}

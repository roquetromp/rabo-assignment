import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Issue } from '../models/issue.model';

@Injectable({
  providedIn: 'root'
})
export class FileParserService {

  constructor() { }

  public parseCSVFile(file: File): Subject<String> {
    const reader = new FileReader();
    const parsedFile$ = new Subject<String>();

    reader.readAsText(file);
    reader.onload = () => {
      parsedFile$.next(<String>reader.result);
    };

    return parsedFile$;
  }

  public convertFileToIssueArray(lines: String[]): Issue[] {
    const issues: Issue[] = [];
    lines.forEach(line => {

      const [firstName, surName, issueCount, dateOfBirth] = line.replace(/\"/g, '').split(',');

      issues.push({
        firstName: firstName,
        surname: surName,
        issueCount: parseInt(issueCount, 10),
        dateOfBirth: new Date(dateOfBirth)
      });
    });
    return issues;
  }


  public parseFileToIssues(file: File): Observable<Issue[]> {
    return this.parseCSVFile(file).pipe(
      map(f => f.split(/\r\n|\n/)),
      map(fileArray => this.convertFileToIssueArray(fileArray.slice(1)))
    );
  }
}

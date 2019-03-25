import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Issue } from '../models/issue.model';

@Injectable({
  providedIn: 'root'
})
export class FileParserService {

  constructor() { }

  private parseCSVFile(file: File): Observable<String[]> {
    const reader = new FileReader();
    const parsedFile$ = new Subject<String>();

    reader.readAsText(file);
    reader.onload = () => {
      parsedFile$.next(<String>reader.result);
    };

    return parsedFile$.pipe(
      tap(f => console.log(f)),
      map(file => (file).split(/\r\n|\n/))
    );
  }

  public convertFileToIssueArray(lines: String[]): Issue[] {
    const issues: Issue[] = [];
    lines.forEach(line => {

      const [firstName, surName, issueCount, dateOfBirth] = line.replace(/\"/g, '').split(',');
      console.log(line);
      console.log(dateOfBirth, new Date(dateOfBirth));
      issues.push({
        firstName: firstName,
        surname: surName,
        issueCount: parseInt(issueCount),
        dateOfBirth: new Date(dateOfBirth)
      });
    });
    return issues;
  }


  public parseFileToIssues(file: File): Observable<Issue[]> {
    return this.parseCSVFile(file).pipe(
      tap (v => console.log(v)),
      map(fileArray => this.convertFileToIssueArray(fileArray.slice(1)))
    );
  }
}

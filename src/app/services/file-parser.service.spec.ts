import { TestBed } from '@angular/core/testing';

import { FileParserService } from './file-parser.service';
import { Issue } from '../models/issue.model';

describe('FileParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileParserService = TestBed.get(FileParserService);
    expect(service).toBeTruthy();
  });

  it('should parse a csv string to an Issue Object', () => {
    const service: FileParserService = TestBed.get(FileParserService);
    const issueArray: Issue[] = service.convertFileToIssueArray([
      '"Theo","Jansen",5,"1978-01-02T00:00:00"',
      '"Fiona","de Vries",7,"1950-11-12T00:00:00"'
    ]);
    const expectedArray: Issue[] = [{
      firstName: 'Theo',
      surname: 'Jansen',
      issueCount: 5,
      dateOfBirth: new Date('1978-01-02T00:00:00'),
    }, {
      firstName: 'Fiona',
      surname: 'de Vries',
      issueCount: 7,
      dateOfBirth: new Date('1950-11-12T00:00:00'),
    }];

    expect(issueArray).toEqual(expectedArray);
  });
});

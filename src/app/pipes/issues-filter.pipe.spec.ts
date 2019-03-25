import { IssuesFilterPipe } from './issues-filter.pipe';

fdescribe('IssuesFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new IssuesFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter the issues based on the issuecount', () => {
    const pipe = new IssuesFilterPipe();
    const issues: any[] = [{
      issueCount: 0
    }, {
      issueCount: 4
    }, {
      issueCount: 7
    }];

    const filteredIssues  = pipe.transform(issues, 3);
    expect(filteredIssues.length).toEqual(2);
  });
});

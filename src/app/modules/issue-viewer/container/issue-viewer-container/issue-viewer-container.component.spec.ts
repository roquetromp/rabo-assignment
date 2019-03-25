import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueViewerContainerComponent } from './issue-viewer-container.component';
import { Component, Input } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Issue } from 'src/app/models/issue.model';


@Component({selector: 'rabo-issue-viewer', template: ''})
class RaboIssueViewerMockComponent {
  @Input() issues: any;
}
describe('IssueViewerContainerComponent', () => {
  const ISSUES: Issue[] = [{
    firstName: 'Johnny',
    surname: 'Bravo',
    dateOfBirth: new Date(),
    issueCount: 100
  }];

  let component: IssueViewerContainerComponent;
  let fixture: ComponentFixture<IssueViewerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IssueViewerContainerComponent,
        RaboIssueViewerMockComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: {
            pipe: jasmine.createSpy('store.pipe').and.callFake(() => of(ISSUES))
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueViewerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const store = TestBed.get(Store);
    expect(component).toBeTruthy();
    expect(store.pipe).toHaveBeenCalled();
    component.issues$.subscribe(issues => {
      expect(issues).toEqual(ISSUES);
    });
  });
});

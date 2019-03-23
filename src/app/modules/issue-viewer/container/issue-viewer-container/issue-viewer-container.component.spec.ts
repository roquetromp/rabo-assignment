import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueViewerContainerComponent } from './issue-viewer-container.component';

describe('IssueViewerContainerComponent', () => {
  let component: IssueViewerContainerComponent;
  let fixture: ComponentFixture<IssueViewerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueViewerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueViewerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

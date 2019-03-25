import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueViewerComponent } from './issue-viewer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IssuesFilterPipe } from 'src/app/pipes/issues-filter.pipe';

describe('IssueViewerComponent', () => {
  let component: IssueViewerComponent;
  let fixture: ComponentFixture<IssueViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ IssueViewerComponent, IssuesFilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

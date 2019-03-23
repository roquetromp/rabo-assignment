import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileImporterContainerComponent } from './file-importer-container.component';

describe('FileImporterContainerComponent', () => {
  let component: FileImporterContainerComponent;
  let fixture: ComponentFixture<FileImporterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileImporterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileImporterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

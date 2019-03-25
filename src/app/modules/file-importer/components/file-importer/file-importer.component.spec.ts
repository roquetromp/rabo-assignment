import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileImporterComponent } from './file-importer.component';

describe('FileImporterComponent', () => {
  const mockedFile = new File([], 'mockFile.test');
  let component: FileImporterComponent;
  let fixture: ComponentFixture<FileImporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileImporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the localfile property with the newly selected file', () => {
    const event = {
      target: {
        files: [
          mockedFile
        ]
      }
    };
    component.onFileChange(event);
    expect(component.file).toEqual(mockedFile);
  });

  it('should emit the locally selected file', () => {
    const event = {
      target: {
        files: [
          mockedFile
        ]
      }
    };

    spyOn(component.onFileSubmit, 'emit');

    component.onFileChange(event);
    component.submitFile();
    expect(component.onFileSubmit.emit).toHaveBeenCalledWith(mockedFile);
  });
});

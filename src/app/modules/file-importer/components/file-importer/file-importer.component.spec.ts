import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileImporterComponent } from './file-importer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileValidatorService } from 'src/app/services/file-validator.service';
import { FileParserService } from 'src/app/services/file-parser.service';
import { of } from 'rxjs';

describe('FileImporterComponent', () => {
  const mockedFile = new File([], 'mockFile.test');
  const ISSUES: any = ['issue1', 'issue2'];

  let component: FileImporterComponent;
  let fixture: ComponentFixture<FileImporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ FileImporterComponent ],
      providers: [{
        provide: FileValidatorService,
        useValue: {
          isValidFormat: jasmine.createSpy('fileValidatorService.isValid').and.returnValue(true)
        }
      }, {
        provide: FileParserService,
        useValue: {
          parseCSVFile: jasmine.createSpy('fileParserService.parseCSVFile').and.callFake(() => of(ISSUES))
        }
      }]
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
    const fileParserService: FileParserService = TestBed.get(FileParserService);
    const fileValidatorService: FileValidatorService = TestBed.get(FileValidatorService);

    spyOn(component.fileSubmit, 'emit');

    component.onFileChange(event);
    component.submitFile();
    expect(component.fileSubmit.emit).toHaveBeenCalledWith(mockedFile);
    expect(fileParserService.parseCSVFile).toHaveBeenCalledWith(mockedFile);
    expect(fileParserService.parseCSVFile).not.toHaveBeenCalledWith(null); // false positive check
    expect(fileValidatorService.isValidFormat).toHaveBeenCalled();
    expect(component.fileImporterForm.valid).toEqual(true);
  });
});

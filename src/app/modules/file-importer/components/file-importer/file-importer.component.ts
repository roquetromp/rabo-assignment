import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FileValidatorService } from 'src/app/services/file-validator.service';
import { FileParserService } from 'src/app/services/file-parser.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'rabo-file-importer',
  templateUrl: './file-importer.component.html',
  styleUrls: ['./file-importer.component.scss']
})
export class FileImporterComponent implements OnInit {
  @Output() fileSubmit: EventEmitter<File> = new EventEmitter<File>();
  file: File = null;
  fileImporterForm: FormGroup = new FormGroup({
    fileInput: new FormControl(null)
  });

  constructor(private fileValidatorService: FileValidatorService, private fileParserService: FileParserService) { }

  ngOnInit() {
  }

  submitFile() {
    this.fileSubmit.emit(this.file);
  }

  validateFile(file: File) {
    this.fileParserService
      .parseCSVFile(this.file).pipe(
        map(fileContent => this.fileValidatorService.isValidFormat(fileContent))
      ).subscribe(isValid => {
        this.fileImporterForm.controls['fileInput'].setErrors(!isValid ? { invalidFormat: isValid } : null);
      });
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    this.validateFile(this.file);
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rabo-file-importer',
  templateUrl: './file-importer.component.html',
  styleUrls: ['./file-importer.component.scss']
})
export class FileImporterComponent implements OnInit {
  @Output () onFileSubmit: EventEmitter<File> = new EventEmitter<File>();
  file: File = null;

  constructor() { }

  ngOnInit() {
  }

  submitFile() {
    this.onFileSubmit.emit(this.file);

  }

  onFileChange(event) {
    this.file = event.target.files[0];
  }

}

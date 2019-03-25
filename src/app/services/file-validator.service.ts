import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileValidatorService {

  constructor() { }

  isValidFormat(fileContent: String): boolean {
    // "First name","Sur name","Issue count","Date of birth"\r\n"Theo","Jansen",5,"1978-01-02T00:00:00
    const lines = fileContent.split('\r\n');
    if (lines.length < 1) {
      return false;
    }
    for (const line of lines) {
      if (line.split(',').length < 4) {
        return false;
      }
    }

    return true;
  }
}

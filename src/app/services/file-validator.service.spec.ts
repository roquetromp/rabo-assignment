import { TestBed } from '@angular/core/testing';

import { FileValidatorService } from './file-validator.service';

describe('FileValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileValidatorService = TestBed.get(FileValidatorService);
    expect(service).toBeTruthy();
  });

  it('should validate to true if file content is correct', () => {
    const service: FileValidatorService = TestBed.get(FileValidatorService);
    const fileContent = `"First name","Sur name","Issue count","Date of birth"\r\n"Theo","Jansen",5,"1978-01-02T00:00:00`;
    const valid = service.isValidFormat(fileContent);
    expect(valid).toEqual(true);
  });

  it('should validate to false if the file format is incorrect', () => {
    const service: FileValidatorService = TestBed.get(FileValidatorService);
    const fileContent = `"random gibbirish"`;
    const valid = service.isValidFormat(fileContent);
    expect(valid).toEqual(false);
  });
});

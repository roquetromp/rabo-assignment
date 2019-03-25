import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileImporterContainerComponent } from './file-importer-container.component';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Import } from '../../../../store/actions/issue.actions';

@Component({selector: 'rabo-file-importer', template: ''})
class RaboFileImporterMockComponent {
}

fdescribe('FileImporterContainerComponent', () => {
  let component: FileImporterContainerComponent;
  let fixture: ComponentFixture<FileImporterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FileImporterContainerComponent ,
        RaboFileImporterMockComponent
      ],
      providers: [
        {provide: Store,
        useValue: {
          dispatch: jasmine.createSpy('Store.dispatch')
        }}
      ]
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

  it('should call the store dispatch method when importFile is called', () => {
    const store = TestBed.get(Store);
    const file: File = new File([], 'mockFile.test');

    component.importFile(file);
    expect(store.dispatch).toHaveBeenCalledWith(new Import(file));
  });
});

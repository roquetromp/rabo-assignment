import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  FileImporterContainerComponent
} from './modules/file-importer/container/file-importer-container/file-importer-container.component';
import { FileImporterComponent } from './modules/file-importer/components/file-importer/file-importer.component';
import { IssueViewerContainerComponent } from './modules/issue-viewer/container/issue-viewer-container/issue-viewer-container.component';
import { IssueViewerComponent } from './modules/issue-viewer/components/issue-viewer/issue-viewer.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IssueEffects } from './store/effects/issue.effects';
import { appReducers } from './store/reducers/app.reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { IssuesFilterPipe } from './pipes/issues-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileImporterContainerComponent,
    FileImporterComponent,
    IssueViewerContainerComponent,
    IssueViewerComponent,
    IssuesFilterPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot( appReducers),
    EffectsModule.forRoot([IssueEffects]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

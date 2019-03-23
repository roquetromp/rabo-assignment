import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileImporterContainerComponent } from './modules/file-importer/container/file-importer-container/file-importer-container.component';
import { FileImporterComponent } from './modules/file-importer/components/file-importer/file-importer.component';
import { IssueViewerContainerComponent } from './modules/issue-viewer/container/issue-viewer-container/issue-viewer-container.component';
import { IssueViewerComponent } from './modules/issue-viewer/components/issue-viewer/issue-viewer.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/issue.reducers';
import { EffectsModule } from '@ngrx/effects';
import { IssueEffects } from './store/effects/issue.effects';
import { appReducers } from './store/reducers/app.reducers';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FileImporterContainerComponent,
    FileImporterComponent,
    IssueViewerContainerComponent,
    IssueViewerComponent
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

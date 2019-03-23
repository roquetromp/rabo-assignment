import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileImporterContainerComponent } from './modules/file-importer/container/file-importer-container.component';

const routes: Routes = [ ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

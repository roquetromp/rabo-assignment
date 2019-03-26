# RaboAssignment
In this app the user must be able to upload a .csv file and the content should be displayed in a table, with the ability to filter through the issues.

* I have chosen to implement this app on one page, without routing, in order to keep it simple. There is always room for improvement.
* The csv is validated purely on the amount of columns that the .csv file has. If it doesn't match then in the imported file is invalid. This validation can be more complex by validating the content of the columns, but I did not do that.
* The statemanagement is handled with ngRx with reducers, effects and selectors.
* For the filtering I have chosen to the minimum issue count filter in order to keep it simple.
* The following unit tests have been implemented: 
  * pipes/issues-filter.pipe.spec.ts
  * services/file-validator.service.spec.ts
  * services/file-parser.service.spec.ts
  * modules/issue-viewer/container/issue-viewer-container/issue-viewer-container.component.spec.ts
  * modules/file-importer/container/file-importer-container/file-importer-container.component.spec.ts
  * modules/file-importer/components/file-importer/file-importer.component.spec.ts

I have skipped the e2e test.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

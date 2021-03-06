import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { FileParserService } from '../../services/file-parser.service';
import { Import, IssueActions, ImportComplete } from '../actions/issue.actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Issue } from '../../models/issue.model';

@Injectable()
export class IssueEffects {

    @Effect()
    importFile$ = this.action$.pipe(
        ofType<Import>(IssueActions.Import),
        switchMap((action) => this.fileParserService.parseFileToIssues(action.payload)),
        switchMap((issues: Issue[]) => of(new ImportComplete(issues))),
    );

    constructor(private fileParserService: FileParserService,
        private action$: Actions) {}

}

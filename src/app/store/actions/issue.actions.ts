import { Action } from '@ngrx/store';
import { Issue } from '../../models/issue.model';

export enum IssueActions {
    Import = '[Issue] Import',
    ImportComplete = '[Issue] ImportComplete',
}

export class Import implements Action {
    public readonly type = IssueActions.Import;
    constructor(public payload: any) { }
}

export class ImportComplete implements Action {
    public readonly type = IssueActions.ImportComplete;
    constructor(public payload: Issue[]) {}
}

export type IssueActionType = Import | ImportComplete;

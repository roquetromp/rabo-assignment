import { Action } from "@ngrx/store";
import { Issue } from "../../models/issue.model";

export enum IssueActions {
    Import = '[Issue] Import',
    ImportComplete = '[Issue] ImportComplete',
    IsProcessing = '[Issue] IsProcessing',
    Filter = '[Issue] Filter'
}

export class Import implements Action {
    public readonly type = IssueActions.Import;
    constructor(public payload: any) { }
}

export class ImportComplete implements Action {
    public readonly type = IssueActions.ImportComplete;
    constructor(public payload: Issue[]) {}
}
export class IsProcessing implements Action {
    public readonly type = IssueActions.IsProcessing;
    constructor(public payload: boolean) { }
}

export class Filter implements Action {
    public readonly type = IssueActions.Filter;
    constructor(public payload: number) {}
}

export type IssueActionType = Import | ImportComplete | IsProcessing | Filter;
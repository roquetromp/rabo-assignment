import { ActionReducerMap } from "@ngrx/store";
import * as fromIssues from "../reducers/issue.reducers";
import * as fromAppState from '../state/app.state';

export  const appReducers : ActionReducerMap<fromAppState.State, any> = {
    issues: fromIssues.reducer
}
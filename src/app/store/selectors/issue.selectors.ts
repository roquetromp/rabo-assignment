import * as fromAppState from "../state/app.state";
import * as fromIssuesState from "../state/issue.state";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export const getIssuesState = (state: fromAppState.State) => state.issues;

export const getIssues = createSelector(
    getIssuesState,
    (state: fromIssuesState.State) => state.issues
)

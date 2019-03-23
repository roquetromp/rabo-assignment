import * as fromIssue from "../state/issue.state";
export interface State {
    issues: fromIssue.State;
}

export const initialState: State = {
    issues: fromIssue.initialState
}
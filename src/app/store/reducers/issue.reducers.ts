import { initialState, State } from "../state/issue.state";
import { IssueActionType, IssueActions, Import } from "../actions/issue.actions";

export function reducer(state: State = initialState, action: IssueActionType): State {
    switch (action.type) {
        case IssueActions.Import:
            return { ...state, isProcessing: true };
        case IssueActions.ImportComplete:
            return {
                ...state,
                issues: action.payload,
                filteredIssues: action.payload,
                isProcessing: false
            }
        case IssueActions.Filter:
            return {
                ...state,
                filteredIssues: state.issues.filter(issue => issue.issueCount > action.payload)
            }
        default:
            return { ...state }
    }
}
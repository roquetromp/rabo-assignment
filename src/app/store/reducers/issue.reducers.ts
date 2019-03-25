import { initialState, State } from '../state/issue.state';
import { IssueActionType, IssueActions } from '../actions/issue.actions';

export function reducer(state: State = initialState, action: IssueActionType): State {
    switch (action.type) {
        case IssueActions.Import:
            return { ...state, isProcessing: true };
        case IssueActions.ImportComplete:
            return {
                ...state,
                issues: action.payload,
                isProcessing: false
            };
        default:
            return { ...state };
    }
}

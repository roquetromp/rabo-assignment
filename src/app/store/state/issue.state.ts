import { Issue } from "../../models/issue.model";

export interface State {
    issues: Issue[];
    filteredIssues:Issue[];
    isProcessing:boolean;
}

export const initialState: State = {
    issues:[],
    filteredIssues: [],
    isProcessing: false,
}
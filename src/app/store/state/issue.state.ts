import { Issue } from "../../models/issue.model";

export interface State {
    issues: Issue[];
    isProcessing:boolean;
}

export const initialState: State = {
    issues:[],
    isProcessing: false,
}
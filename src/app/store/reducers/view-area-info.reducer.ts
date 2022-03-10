import {createReducer} from "@ngrx/store";

export interface ViewAreaInfoState{
  selectedTab:number;
}

export const initialState: ViewAreaInfoState = {
  selectedTab: 1,
}

const _viewAreaInfoReducer = createReducer(
  initialState
)


export  function viewAreaInfoReducer (state: ViewAreaInfoState, action:any):any {
  return _viewAreaInfoReducer(state, action);
}

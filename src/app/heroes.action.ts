import { Action } from "@ngrx/store";

export enum ActionTypes {
  Save = "Heroes Save",
  Search = "Heroes Search",
  Add = "Heroes Add"
}

export class Save implements Action {
  readonly type = ActionTypes.Save;

  constructor(public payload: { id: number; name: string }) {}
}

export class Add implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: { name: string }) {}
}

export class Search implements Action {
  readonly type = ActionTypes.Search;

  constructor(public payload: { term: string }) {}
}

export type Union = Save | Add | Search;

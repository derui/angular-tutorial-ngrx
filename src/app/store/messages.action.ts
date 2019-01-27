import { Action } from "@ngrx/store";

export enum ActionTypes {
  Add = "Messages Add",
  Clear = "Messages Clear"
}

export class Clear implements Action {
  readonly type = ActionTypes.Clear;
}

export class Add implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: { message: string }) {}
}

export type Union = Clear | Add;

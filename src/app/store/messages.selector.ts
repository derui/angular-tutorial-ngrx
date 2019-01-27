import { MessageState, AppState } from "./app.state";
import { createSelector } from "@ngrx/store";

const selectRoot = (state: AppState) => state.messages;

export const selectMessages = createSelector(
  selectRoot,
  (state: MessageState) => state.messages
);

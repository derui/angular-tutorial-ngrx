import { State } from "./messages.reducer";

export const selectMessages = (state: State) => state.messages;

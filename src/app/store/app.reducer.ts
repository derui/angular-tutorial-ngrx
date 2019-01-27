import { ActionReducerMap } from "@ngrx/store";

import { AppState } from "./app.state";
import { Union as HeroesUnion } from "./heroes.action";
import { Union as MessagesUnion } from "./messages.action";
import { heroesReducer } from "./heroes.reducer";
import { messagesReducer } from "./messages.reducer";

type Actions = HeroesUnion | MessagesUnion;

export const appReducer: ActionReducerMap<AppState, Actions> = {
  heroes: heroesReducer,
  messages: messagesReducer
};

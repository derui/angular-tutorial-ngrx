import { ActionTypes, Union } from "./heroes.action";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

export type State = {
  allHeroes: Hero[];
  searched: Hero[];
};

export const initialState: State = {
  allHeroes: HEROES,
  searched: []
};

export function heroesReducer(state = initialState, action: Union) {
  switch (action.type) {
    case ActionTypes.Add: {
      const id =
        state.allHeroes.reduce((acc, v) => (acc.id < v.id ? v : acc)).id + 1;
      const copied = Array.from(state.allHeroes);
      copied.push({ id, name: action.payload.name });
      return { ...state, allHeroes: copied };
    }
    case ActionTypes.Save: {
      const copied = state.allHeroes.map(v => {
        if (v.id !== action.payload.id) {
          return v;
        }
        return { ...v, name: action.payload.name };
      });
      return { ...state, allHeroes: copied };
    }
    case ActionTypes.Search: {
      const searched = state.allHeroes.filter(v =>
        v.name.startsWith(action.payload.term)
      );
      return { ...state, searched };
    }
    default:
      return state;
  }
}

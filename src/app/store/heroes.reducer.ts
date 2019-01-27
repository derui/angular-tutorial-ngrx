import { ActionTypes, Union } from "./heroes.action";
import { HEROES } from "../mock-heroes";
import { HeroState } from "./app.state";

export const initialState: HeroState = {
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
    case ActionTypes.Delete: {
      const allHeroes = state.allHeroes.filter(v => v.id !== action.payload.id);
      return { ...state, allHeroes };
    }
    default:
      return state;
  }
}

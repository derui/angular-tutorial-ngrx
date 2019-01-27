import { createSelector } from "@ngrx/store";
import { State } from "./heroes.reducer";
import { Hero } from "./hero";

export const selectAllHeroes = (state: State) => state.allHeroes;
export const selectSearched = (state: State) => state.searched;
export const selectHero = createSelector(
  selectAllHeroes,
  (state: Hero[], props: { id: number }) => state.find(v => v.id === props.id)
);

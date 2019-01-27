import { createSelector } from "@ngrx/store";
import { AppState, HeroState } from "./app.state";
import { Hero } from "../hero";

const selectHeroes = (state: AppState) => state.heroes;

export const selectAllHeroes = createSelector(
  selectHeroes,
  (state: HeroState) => state.allHeroes
);

export const selectSearched = createSelector(
  selectHeroes,
  (state: HeroState) => state.searched
);

export const selectHero = createSelector(
  selectAllHeroes,
  (state: Hero[], props: { id: number }) => state.find(v => v.id === props.id)
);

import { Hero } from "../hero";

export type AppState = {
  heroes: HeroState;
  messages: MessageState;
};

export type HeroState = {
  allHeroes: Hero[];
  searched: Hero[];
};

export type MessageState = {
  messages: string[];
};

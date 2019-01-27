import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Store, select } from "@ngrx/store";

import { Hero } from "./hero";
import { MessageService } from "./message.service";
import { AppState } from "./store/app.state";
import {
  selectAllHeroes,
  selectHero,
  selectSearched
} from "./store/heroes.selector";
import {
  Save as SaveHero,
  Add as AddHero,
  Delete as DeleteHero,
  Search
} from "./store/heroes.action";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(
    private messageService: MessageService,
    private store: Store<AppState>
  ) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return this.store.pipe(select(selectAllHeroes));
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.store.pipe(select(selectHero, { id }));
  }

  updateHero(hero: Hero): Observable<any> {
    this.store.dispatch(new SaveHero(hero));
    return of();
  }

  addHero(hero: Hero): Observable<any> {
    this.store.dispatch(new AddHero({ name: hero.name }));
    return of();
  }

  deleteHero(hero: Hero): Observable<any> {
    this.store.dispatch(new DeleteHero({ id: hero.id }));
    return of();
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    this.store.dispatch(new Search({ term: term.trim() }));
    return this.store.pipe(select(selectSearched));
  }
}

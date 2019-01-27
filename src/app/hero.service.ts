import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  updateHero(hero: Hero): Observable<any> {
    // TODO: implement with state management
    return of();
  }

  addHero(hero: Hero): Observable<any> {
    // TODO: implement with state management
    return of();
  }

  deleteHero(hero: Hero): Observable<any> {
    // TODO: implement with state management
    return of();
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    // TODO: implement with state management
    return of([]);
  }
}

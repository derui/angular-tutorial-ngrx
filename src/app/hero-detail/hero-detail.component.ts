import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  hero$: Observable<Hero>;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.hero$ = this.heroService.getHero(id);
    this.hero$.subscribe(v => {
      this.hero = v;
      this.name = v.name;
    });
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.heroService.updateHero({ ...this.hero, name: this.name });
    this.goBack();
  }
}

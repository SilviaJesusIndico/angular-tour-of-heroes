import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Hero, ListResult } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  baseurl = window.origin
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<ListResult> {
    const heroes = this.http.get<ListResult>(`${this.baseurl}/assets/hero.json`);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
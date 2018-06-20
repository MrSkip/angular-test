import {Injectable, OnInit} from '@angular/core';
import {Film} from "./film";
import {FilmHttpService} from "./film-http.service";
import {Observable} from "rxjs/Observable";

@Injectable({
    providedIn: 'root'
})
export class FilmService implements OnInit {
    public film$: Observable<Film>;

    constructor(private filmHttpService: FilmHttpService) {}

    ngOnInit() {
    }

    public loadFilmById(id: number): Observable<Film> {
        return this.film$ = this.filmHttpService.findOneById(id);
    }

}

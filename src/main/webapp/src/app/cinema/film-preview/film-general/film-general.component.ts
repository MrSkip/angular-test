import {Component, OnInit} from '@angular/core';
import {Film} from "../film";
import {FilmService} from "../film.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-film-general',
    templateUrl: './film-general.component.html',
    styleUrls: ['./film-general.component.css']
})
export class FilmGeneralComponent implements OnInit {
    public film: Film;

    constructor(private route: ActivatedRoute,
                public filmService: FilmService) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.filmService.loadFilmById(id)
            .subscribe(value => this.film = value);
    }

}

import {Component, OnInit} from '@angular/core';
import {FilmService} from "../film.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-film-scheduler',
    templateUrl: './film-scheduler.component.html',
    styleUrls: ['./film-scheduler.component.css']
})
export class FilmSchedulerComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                public filmService: FilmService) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');

    }

}

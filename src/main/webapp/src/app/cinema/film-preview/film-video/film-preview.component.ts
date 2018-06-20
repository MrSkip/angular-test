import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-film-preview',
    templateUrl: './film-preview.component.html',
    styleUrls: ['./film-preview.component.css']
})
export class FilmPreviewComponent implements OnInit {
    @Input() trailers: [string];

    constructor() {
    }

    ngOnInit() {

    }

}

import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
import {ObservableMedia} from "@angular/flex-layout";

@Component({
  selector: 'app-biggest-hits',
  templateUrl: './biggest-hits.component.html',
  styleUrls: ['./biggest-hits.component.css']
})
export class BiggestHitsComponent implements OnInit {
    tiles: { text: string, id: number, rows: number, link: string }[] = [
        {text: 'One', id: 1, rows: 1, link: 'https://source.unsplash.com/random/800x600'},
        {text: 'Two', id: 2, rows: 2, link: 'https://source.unsplash.com/random/800x600'},
        {text: 'Three', id: 3, rows: 1, link: 'https://source.unsplash.com/random/800x600'},
        {text: 'Four', id: 4, rows: 1, link: 'https://source.unsplash.com/random/800x600'},
        {text: 'Five', id: 5, rows: 1, link: 'https://source.unsplash.com/random/800x600'},
        {text: 'Six', id: 6, rows: 1, link: 'https://source.unsplash.com/random/800x600'},
        {text: 'Six', id: 7, rows: 1, link: 'https://source.unsplash.com/random/800x600'},
        {text: 'Six', id: 8, rows: 1, link: 'https://source.unsplash.com/random/800x600'},
    ];

    /**
     * The number of columns in the mat-grid-list directive.
     */
    public cols: Observable<number>;

    constructor(private observableMedia: ObservableMedia) {
    }

    ngOnInit() {
        const grid = new Map([
            ["xs", 1],
            ["sm", 2],
            ["md", 3],
            ["lg", 4],
            ["xl", 5]
        ]);
        let start: number;
        grid.forEach((cols, mqAlias) => {
            if (this.observableMedia.isActive(mqAlias)) {
                start = cols;
            }
        });
        this.cols = this.observableMedia.asObservable()
            .map(change => {
                console.log(change);
                console.log(grid.get(change.mqAlias));
                return grid.get(change.mqAlias);
            })
            .startWith(start);
    }

}

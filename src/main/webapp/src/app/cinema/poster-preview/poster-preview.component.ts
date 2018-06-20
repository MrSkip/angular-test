import {Component, OnInit, ViewChild} from '@angular/core';
import {IImage} from "ng-simple-slideshow/src/app/modules/slideshow/IImage";

@Component({
    selector: 'app-poster-preview',
    templateUrl: './poster-preview.component.html',
    styleUrls: ['./poster-preview.component.scss']
})
export class PosterPreviewComponent implements OnInit {
    // @ViewChild('slideshow') slideshow: any;

    imageSources: IImage[];

    constructor() {
    }

    ngOnInit() {
        this.imageSources = [
            {url: './assets/images/tomb_raider.jpg', caption: 'Tom Raider', title: "Title test"},
            {url: './assets/images/interstellar.jpg', caption: 'Interstellar', title: "Title test"},
            {url: './assets/images/star.jpg', caption: 'Star Wars', title: "Title test"}
        ];
        // this.slideshow.onSlide(-1);
    }

}

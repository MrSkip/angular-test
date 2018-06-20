import {Component, Input, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";
import {Observable} from "rxjs/Observable";
import {Film} from "../film";

@Component({
    selector: 'app-film-posters',
    templateUrl: './film-posters.component.html',
    styleUrls: ['./film-posters.component.css']
})
export class FilmPostersComponent implements OnInit {
    @Input() film$: Observable<Film>;


    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];

    constructor() {
        this.galleryImages = [];
    }

    ngOnInit() {
        // this.galleryOptions = [
        //     {
        //         width: '600px',
        //         height: '400px',
        //         thumbnailsColumns: 4,
        //         imageAnimation: NgxGalleryAnimation.Slide
        //     },
        //     // max-width 800
        //     {
        //         breakpoint: 800,
        //         width: '100%',
        //         height: '600px',
        //         imagePercent: 80,
        //         thumbnailsPercent: 20,
        //         thumbnailsMargin: 20,
        //         thumbnailMargin: 20
        //     },
        //     // max-width 400
        //     {
        //         breakpoint: 400,
        //         preview: false
        //     }
        // ];
        this.galleryOptions = [
            {previewCloseOnClick: true, previewCloseOnEsc: true},
            // {breakpoint: 1280, width: "1000px", height: "800px", thumbnailsColumns: 3},
            // {breakpoint: 500, width: "100%", height: "100px", thumbnailsColumns: 3},
            // {breakpoint: 300, width: "100%", height: "100px", thumbnailsColumns: 2},
            {breakpoint: 1900, width: "100%", height: "79vh", thumbnailsColumns: 3}
        ];
        this.film$.subscribe(value => {
            this.galleryImages = [];
            value.posters.forEach(link => {
                this.galleryImages.push({small: link, medium: link, big: link});
            })
        });
        // this.galleryImages = [
        //     {
        //         small: './assets/1-small.jpg',
        //         medium: './assets/1-medium.jpg',
        //         big: './assets/1-big.jpg'
        //     },
        //     {
        //         small: './assets/2-small.jpg',
        //         medium: './assets/2-medium.jpg',
        //         big: './assets/2-big.jpg'
        //     },
        //     {
        //         small: './assets/3-small.jpg',
        //         medium: './assets/3-medium.jpg',
        //         big: './assets/3-big.jpg'
        //     }
        // ];
    }

}

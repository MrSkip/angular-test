import {Component, Input, OnInit} from '@angular/core';
import {FilmService} from "../film.service";
import {Film} from "../film";

@Component({
  selector: 'app-film-body',
  templateUrl: './film-body.component.html',
  styleUrls: ['./film-body.component.css']
})
export class FilmBodyComponent implements OnInit {
  @Input() film : Film;

  constructor(public filmService: FilmService) { }

  ngOnInit() {

  }

}

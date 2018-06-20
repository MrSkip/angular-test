import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {Film} from "./film";
import {of} from "rxjs/observable/of";
import {log} from "util";

@Injectable({
    providedIn: 'root'
})
export class FilmHttpService {
    private baseUrl = "api/films";

    constructor(private http: HttpClient) {
    }

    /** GET heroes from the server */
    getFilm(id: number): Observable<Film[]> {
        return this.http.get<Film[]>(this.baseUrl)
            .pipe(
                tap(heroes => log(`fetched heroes`)),
                catchError(this.handleError('getHeroes', []))
            );
    }

    findOneById(id: number): Observable<Film> {
        return of(
            {
                id: 1,
                name: "Test",
                country: "USA",
                genres: ["fantasy"],
                actors: ["Сандра Буллок", "Кейт Бланшетт", "Енн Гетевей","Сандра Буллок",
                    "Кейт Бланшетт", "Енн Гетевей","Сандра Буллок", "Кейт Бланшетт", "Енн Гетевей",
                    "Сандра Буллок", "Кейт Бланшетт", "Енн Гетевей"],
                producer: "Stiven Spilberg",
                duration: 111,
                language: "Ukrainian",
                year: 2017,
                posters: [
                    "./assets/images/tomb_raider.jpg",
                    "./assets/images/star.jpg",
                    "./assets/images/interstellar.jpg"
                ],
                trailers: ["VYOjWnS4cMY"]
            } as Film
        )
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

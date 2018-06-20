import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {log} from "util";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Scheduler} from "./scheduler";

@Injectable({
    providedIn: 'root'
})
export class FilmSchedulerHttpService {
    baseUrl = 'api/';

    constructor(private http: HttpClient) {
    }

    /** GET heroes from the server */
    // getScheduleForFilm(filmId: string): Observable<Scheduler[]> {
    //     return of([
    //         {
    //             available: true,
    //             date: '2018-08-11',
    //             time: '11:00',
    //             id: 1
    //         },
    //         {
    //             available: true,
    //             date: '2019-08-11',
    //             time: '11:00',
    //             id: 2
    //         },
    //         {
    //             available: true,
    //             date: '2018-08-11',
    //             time: '11:00',
    //             id: 3
    //         },
    //     ] as Scheduler[])
    //     // return this.http.get<Film[]>(this.baseUrl)
    //     //     .pipe(
    //     //         tap(heroes => log(`fetched heroes`)),
    //     //         catchError(this.handleError('getHeroes', []))
    //     //     );
    // }

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

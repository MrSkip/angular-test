import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatList, MatListModule,
    MatGridListModule,
    MatToolbarModule
} from '@angular/material';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {SlideshowModule} from 'ng-simple-slideshow';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import {MessagesComponent} from './messages/messages.component';
import {PosterPreviewComponent} from './cinema/poster-preview/poster-preview.component';
import {UpcomingFilmsComponent} from './cinema/upcoming-films/upcoming-films.component';
import {UserNotificationComponent} from './cinema/top-bar/user-notification/user-notification.component';
import {BarUserProfileComponent} from './cinema/top-bar/bar-user-profile/bar-user-profile.component';
import {ToolbarComponent} from './cinema/top-bar/toolbar/toolbar.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { BiggestHitsComponent } from './cinema/biggest-hits/biggest-hits.component';
import { FilmPreviewComponent } from './cinema/film-preview/film-video/film-preview.component';
import {YoutubePlayerModule} from "ng2-youtube-player";
import { FilmBodyComponent } from './cinema/film-preview/film-body/film-body.component';
import { FilmGeneralComponent } from './cinema/film-preview/film-general/film-general.component';
import { FilmPostersComponent } from './cinema/film-preview/film-posters/film-posters.component';
import {NgxGalleryModule} from "ngx-gallery";
import { FilmSchedulerComponent } from './cinema/film-preview/film-scheduler/film-scheduler.component';
import {LoginComponent} from "./cinema/user/login/login.component";

@NgModule({
    imports: [
        YoutubePlayerModule,
        MatButtonModule,
        MatListModule,
        MatCheckboxModule,
        MatGridListModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserModule,
        SlideshowModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        NgxGalleryModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        ),
        SimpleNotificationsModule.forRoot({
            timeOut: 3000,
            showProgressBar: false,
            pauseOnHover: true,
            clickToClose: false,
            clickIconToClose: true
        })
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        HeroSearchComponent,
        LoginComponent,
        PosterPreviewComponent,
        UpcomingFilmsComponent,
        UserNotificationComponent,
        BarUserProfileComponent,
        ToolbarComponent,
        BiggestHitsComponent,
        FilmPreviewComponent,
        FilmBodyComponent,
        FilmGeneralComponent,
        FilmPostersComponent,
        FilmSchedulerComponent
    ],
    providers: [HeroService, MessageService],
    bootstrap: [AppComponent],
})
export class AppModule {
}

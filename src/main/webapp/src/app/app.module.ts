import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import {MessagesComponent} from './messages/messages.component';
import {LoginComponent} from './login/login.component';
import { PosterPreviewComponent } from './cinema/poster-preview/poster-preview.component';
import { UpcomingFilmsComponent } from './cinema/upcoming-films/upcoming-films.component';
import { UserNotificationComponent } from './cinema/bar/user-notification/user-notification.component';
import { BarUserProfileComponent } from './cinema/bar/bar-user-profile/bar-user-profile.component';
import { ToolbarComponent } from './cinema/bar/toolbar/toolbar.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,

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
        ToolbarComponent
    ],
    providers: [HeroService, MessageService],
    bootstrap: [AppComponent],
})
export class AppModule {
}

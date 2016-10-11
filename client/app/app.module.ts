import 'app/rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { HttpHelper } from "./helpers/HttpHelper";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/HomeComponent";
import { LoginComponent } from "./components/login/LoginComponent";
import { AuthGuard } from "./guards/auth.guard";
import { routing } from "./app.routing";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        AuthService,
        AuthGuard

    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
import 'app/rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { HttpHelper } from "./helpers/HttpHelper";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [ AppComponent ],
    providers: [
        AuthService

    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
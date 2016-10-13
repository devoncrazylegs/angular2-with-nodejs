import 'app/rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AuthGuard } from "./guards/auth.guard";
import { routing } from "./app.routing";

import { AppComponent }   from './app.component';

import { HttpHelper } from "./helpers/HttpHelper";

import { HomeComponent } from "./components/home/HomeComponent";
import { LoginComponent } from "./components/login/LoginComponent";
import { NavBarComponent } from "./components/navbar/NavBarComponent";
import { ProductComponent } from "./components/products/ProductComponent";

import { GlobalEventsManager } from "./services/globalEventsManager.service";
import { AuthService } from "./services/auth.service";



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
        LoginComponent,
        NavBarComponent,
        ProductComponent
    ],
    providers: [
        AuthService,
        AuthGuard,
        GlobalEventsManager

    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
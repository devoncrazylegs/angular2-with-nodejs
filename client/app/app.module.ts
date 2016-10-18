import 'app/rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AuthGuard } from "./guards/auth.guard";
import { routing } from "./app.routing";

import { AppComponent }   from './app.component';

import { HomeComponent } from "./components/home/HomeComponent";
import { LoginComponent } from "./components/login/LoginComponent";
import { NavBarComponent } from "./components/navbar/NavBarComponent";
import { ProductComponent } from "./components/catalog/products/ProductComponent";

import { GlobalEventsManager } from "./services/globalEventsManager.service";
import { AuthService } from "./services/auth.service";
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { LeftNavComponent } from "./components/left-nav/left-nav-component";
import { SettingsComponent } from "./components/settings/settings-component";
import { UsersComponent } from "./components/users/users-component";
import { OptionsComponent } from "./components/catalog/options/OptionsComponent";
import { CategoriesComponent } from "./components/catalog/categories/CategoriesComponent";
import { ManufacturersComponent } from "./components/catalog/manufacturers/ManufacturersComponent";
import { ProductSearchComponent } from "./components/catalog/products/directives/ProductSearchComponent";
import { ProductListComponent } from "./components/catalog/products/directives/ProductListComponent";
import {ProductService} from "./services/product.service";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        ToastModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        NavBarComponent,
        ProductComponent,
        ProductSearchComponent,
        ProductListComponent,
        LeftNavComponent,
        SettingsComponent,
        UsersComponent,
        OptionsComponent,
        CategoriesComponent,
        ManufacturersComponent
    ],
    providers: [
        AuthService,
        AuthGuard,
        GlobalEventsManager,
        ProductService

    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
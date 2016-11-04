import 'app/rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule, Http, XHRBackend, RequestOptions } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AuthGuard } from "./guards/auth.guard";
import { routing } from "./app.routing";

import { AppComponent }   from './app.component';

import { HomeComponent } from "./components/home/HomeComponent";
import { LoginComponent } from "./components/login/LoginComponent";
import { NavBarComponent } from "./components/navbar/NavBarComponent";
import { ProductComponent } from "./components/catalog/products/ProductComponent";

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { LeftNavComponent } from "./components/left-nav/left-nav-component";
import { SettingsComponent } from "./components/settings/settings-component";
import { UsersComponent } from "./components/users/users-component";
import { OptionsComponent } from "./components/catalog/options/OptionsComponent";
import { CategoriesComponent } from "./components/catalog/categories/CategoriesComponent";
import { ManufacturersComponent } from "./components/catalog/manufacturers/ManufacturersComponent";
import { ProductSearchComponent } from "./components/catalog/products/directives/ProductSearchComponent";
import { ProductListComponent } from "./components/catalog/products/directives/ProductListComponent";
import { ProductEditComponent } from "./components/catalog/products/directives/ProductEditComponent";

import { HttpInterceptor } from "./services/HttpInterceptor.service";

import { AuthService } from "./services/auth.service";
import { CategoryService } from "./services/category.service";
import { FilesService } from "./services/files.service";
import { GlobalEventsManager } from "./services/globalEventsManager.service";
import { ManufacturerService } from "./services/manufacturer.service"
import { ProductService } from "./services/product.service";

import { AUTH_PROVIDERS } from "angular2-jwt";

import { FileUploaderDirective } from "./components/directives/files/FileUploaderDirective";
import { TabsDirective } from "./components/directives/tabs/TabsDirective";
import {TabsService} from "./services/tabs.service";



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
        ProductEditComponent,
        LeftNavComponent,
        SettingsComponent,
        UsersComponent,
        OptionsComponent,
        CategoriesComponent,
        ManufacturersComponent,

        FileUploaderDirective,
        TabsDirective
    ],
    providers: [
        AuthGuard,
        AuthService,
        CategoryService,
        FilesService,
        GlobalEventsManager,
        ManufacturerService,
        ProductService,
        TabsService,
        AUTH_PROVIDERS,
        {
            provide: HttpInterceptor,
            useFactory: (
                backend: XHRBackend,
                defaultOptions: RequestOptions,
                authService: AuthService,
                globalEventsManager: GlobalEventsManager
            ) =>
                new HttpInterceptor(backend, defaultOptions, authService, globalEventsManager),
            deps: [XHRBackend, RequestOptions, AuthService, GlobalEventsManager]
        }
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
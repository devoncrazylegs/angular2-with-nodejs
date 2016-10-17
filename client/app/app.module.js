"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('app/rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var auth_guard_1 = require("./guards/auth.guard");
var app_routing_1 = require("./app.routing");
var app_component_1 = require('./app.component');
var HomeComponent_1 = require("./components/home/HomeComponent");
var LoginComponent_1 = require("./components/login/LoginComponent");
var NavBarComponent_1 = require("./components/navbar/NavBarComponent");
var ProductComponent_1 = require("./components/catalog/products/ProductComponent");
var globalEventsManager_service_1 = require("./services/globalEventsManager.service");
var auth_service_1 = require("./services/auth.service");
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var left_nav_component_1 = require("./components/left-nav/left-nav-component");
var settings_component_1 = require("./components/settings/settings-component");
var users_component_1 = require("./components/users/users-component");
var OptionsComponent_1 = require("./components/catalog/options/OptionsComponent");
var CategoriesComponent_1 = require("./components/catalog/categories/CategoriesComponent");
var ManufacturersComponent_1 = require("./components/catalog/manufacturers/ManufacturersComponent");
var ProductSearchComponent_1 = require("./components/catalog/products/directives/ProductSearchComponent");
var ProductListComponent_1 = require("./components/catalog/products/directives/ProductListComponent");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                ng2_toastr_1.ToastModule
            ],
            declarations: [
                app_component_1.AppComponent,
                HomeComponent_1.HomeComponent,
                LoginComponent_1.LoginComponent,
                NavBarComponent_1.NavBarComponent,
                ProductComponent_1.ProductComponent,
                ProductSearchComponent_1.ProductSearchComponent,
                ProductListComponent_1.ProductListComponent,
                left_nav_component_1.LeftNavComponent,
                settings_component_1.SettingsComponent,
                users_component_1.UsersComponent,
                OptionsComponent_1.OptionsComponent,
                CategoriesComponent_1.CategoriesComponent,
                ManufacturersComponent_1.ManufacturersComponent
            ],
            providers: [
                auth_service_1.AuthService,
                auth_guard_1.AuthGuard,
                globalEventsManager_service_1.GlobalEventsManager
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
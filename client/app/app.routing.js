"use strict";
var router_1 = require("@angular/router");
var auth_guard_1 = require("./guards/auth.guard");
var HomeComponent_1 = require("./components/home/HomeComponent");
var LoginComponent_1 = require("./components/login/LoginComponent");
var ProductComponent_1 = require("./components/catalog/products/ProductComponent");
var users_component_1 = require("./components/users/users-component");
var OptionsComponent_1 = require("./components/catalog/options/OptionsComponent");
var CategoriesComponent_1 = require("./components/catalog/categories/CategoriesComponent");
var ManufacturersComponent_1 = require("./components/catalog/manufacturers/ManufacturersComponent");
var appRoutes = [
    { path: '', component: HomeComponent_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: LoginComponent_1.LoginComponent },
    { path: 'products', component: ProductComponent_1.ProductComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'options', component: OptionsComponent_1.OptionsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'categories', component: CategoriesComponent_1.CategoriesComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'manufacturers', component: ManufacturersComponent_1.ManufacturersComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'users', component: users_component_1.UsersComponent, canActivate: [auth_guard_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map
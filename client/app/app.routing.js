"use strict";
var router_1 = require("@angular/router");
var auth_guard_1 = require("./guards/auth.guard");
var HomeComponent_1 = require("./components/home/HomeComponent");
var LoginComponent_1 = require("./components/login/LoginComponent");
var ProductComponent_1 = require("./components/products/ProductComponent");
var appRoutes = [
    { path: '', component: HomeComponent_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: LoginComponent_1.LoginComponent },
    { path: 'products', component: ProductComponent_1.ProductComponent, canActivate: [auth_guard_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map
"use strict";
var router_1 = require("@angular/router");
var HomeComponent_1 = require("./components/home/HomeComponent");
var LoginComponent_1 = require("./components/login/LoginComponent");
var auth_guard_1 = require("./guards/auth.guard");
var appRoutes = [
    { path: '', component: HomeComponent_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: LoginComponent_1.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
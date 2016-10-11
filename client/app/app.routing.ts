import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/HomeComponent";
import { LoginComponent } from "./components/login/LoginComponent";
import { AuthGuard } from "./guards/auth.guard";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
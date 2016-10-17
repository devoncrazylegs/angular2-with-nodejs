import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./components/home/HomeComponent";
import { LoginComponent } from "./components/login/LoginComponent";
import { ProductComponent } from "./components/catalog/products/ProductComponent";
import { UsersComponent } from "./components/users/users-component";
import { OptionsComponent } from "./components/catalog/options/OptionsComponent";
import { CategoriesComponent } from "./components/catalog/categories/CategoriesComponent";
import { ManufacturersComponent } from "./components/catalog/manufacturers/ManufacturersComponent";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
    { path: 'options', component: OptionsComponent, canActivate: [AuthGuard] },
    { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
    { path: 'manufacturers', component: ManufacturersComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
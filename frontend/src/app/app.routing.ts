import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../pages/home/home.component';
import { LoginPageComponent } from '../pages/login/login.component';
import { AuthGuard } from '../guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginPageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
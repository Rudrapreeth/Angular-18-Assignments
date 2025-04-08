import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'user/:id', component: UserComponent },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [AuthGuard],
        children: [
            { path: 'settings', loadComponent: () => import('./dashboard/settings/settings.component').then(m => m.SettingsComponent) },
            { path: 'profile', loadComponent: () => import('./dashboard/profile/profile.component').then(m => m.ProfileComponent) },
            { path: '', redirectTo: 'settings', pathMatch: 'full' }
        ]
    },
    // Wildcard route to display 404 error page when the path does not match any of the defined routes
    { path: '**', component: NotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);

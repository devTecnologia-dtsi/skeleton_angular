import { Routes } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: LayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }  
];

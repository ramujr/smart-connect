import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PolicyComponent } from './policy/policy.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact-us',component:ContactUsComponent},
    { path: 'policy',component: PolicyComponent},
    { path: '**', redirectTo: '' }
];


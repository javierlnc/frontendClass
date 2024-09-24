import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactoComponent },
    { path: 'login', component: LoginComponent },
    {path: 'registro', component:RegistroComponent},
    {path: '**', component: PageNotFoundComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

// Rutas de información
export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta de inicio
  { path: 'about-us', component: AboutUsComponent }, // Ruta de Acerca de nosotros
  { path: 'contact-us', component: ContactoComponent }, // Ruta de contacto

  // Rutas de autenticación
  { path: 'login', component: LoginComponent }, // Ruta de login
  { path: 'registro', component: RegistroComponent }, // Ruta de registro

  // Ruta de página no encontrada
  { path: '**', component: PageNotFoundComponent },

  // Ruta de redirección para la ruta raíz
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];
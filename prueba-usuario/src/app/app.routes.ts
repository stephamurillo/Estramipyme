import { Routes } from '@angular/router';
import path from 'node:path';

import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent} from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './servicios/perfil.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

import { NotFoundError } from 'rxjs';

export const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'inicio',component:InicioComponent},
    {path:'registro',component:RegistroComponent},
    {path:'login',component:LoginComponent},
    {path:'perfil',component:PerfilComponent},
    {path: 'contacto',component:ContactoComponent},
    {path:'testimonios',component:TestimoniosComponent},
    {path:'nosotros',component:NosotrosComponent},  
    {path:'**',component:NotFoundError},
    { path: 'nosotros', component: NosotrosComponent },
]
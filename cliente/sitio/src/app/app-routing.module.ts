import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from 'src/app/components/user/registrar/registrar.component';
import { LoginComponent } from 'src/app/components/user/login/login.component';
import { InterfazUsuarioComponent } from  'src/app/interfazUsuario/interfazUsuario.component';
import { NoticiasComponent } from 'src/app/components/noticias/noticias.component';
import { EquipoComponent } from 'src/app/components/equipo/equipo.component';
import { ContactarComponent } from 'src/app/components/contactar/contactar.component';
import { AcercaComponent } from 'src/app/components/acerca/acerca.component';
import { CasosComponent } from 'src/app/components/casos/casos.component';


const routes: Routes = [
  {path: 'user/login', component:  LoginComponent},
  {path: 'user/registrar', component:  RegistrarComponent},
  {path: 'interfazUsuario', component: InterfazUsuarioComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'contactar', component: ContactarComponent},
  {path: 'acerca', component: AcercaComponent},
  {path: 'casos', component: CasosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

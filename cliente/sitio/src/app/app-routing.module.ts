import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from 'src/app/components/user/registrar/registrar.component';
import { LoginComponent } from 'src/app/components/user/login/login.component';

import { InterfazUsuarioComponent } from  'src/app/interfazUsuario/interfazUsuario.component';


const routes: Routes = [
  {path: 'user/login', component:  LoginComponent},
  {path: 'user/registrar', component:  RegistrarComponent},
  {path: './interfazUsuario', component: InterfazUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

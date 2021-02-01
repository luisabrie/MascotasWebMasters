import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from 'src/app/components/user/registrar/registrar.component';
import { LoginComponent } from 'src/app/components/user/login/login.component';


const routes: Routes = [
  {path: 'user/login', component:  LoginComponent},
  {path: 'user/registrar', component:  RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

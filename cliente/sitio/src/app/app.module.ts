import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MascotaComponent } from './interfazUsuario/mascota/mascota.component';
import { HeaderComponent } from './interfazUsuario/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';
import { AddMascotaComponent } from './interfazUsuario/addMascota/addMascota.component';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrarComponent } from './components/user/registrar/registrar.component';
import { InterfazUsuarioComponent } from './interfazUsuario/interfazUsuario.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactarComponent } from './components/contactar/contactar.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { CasosComponent } from './components/casos/casos.component';

@NgModule({
  declarations: [
    AppComponent, MascotaComponent, HeaderComponent, AddMascotaComponent, NavbarComponent, LoginComponent, RegistrarComponent, InterfazUsuarioComponent, NoticiasComponent, ContactarComponent, EquipoComponent, AcercaComponent, CasosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

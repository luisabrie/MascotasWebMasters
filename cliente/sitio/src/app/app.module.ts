import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MascotaComponent } from './mascota/mascota.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';
import { AddMascotaComponent } from './addMascota/addMascota.component';

@NgModule({
  declarations: [
    AppComponent, MascotaComponent, HeaderComponent, AddMascotaComponent
  ],
  imports: [
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

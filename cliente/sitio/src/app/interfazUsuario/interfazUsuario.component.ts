import { Component } from '@angular/core';
import { Mascota } from './mascota/mascota.model';
import { MascotaserviceService } from "../services/mascotaservice.service";
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-interfazUsuario',
  templateUrl: './interfazUsuario.component.html',
  styleUrls: ['./interfazUsuario.component.css']
})
export class InterfazUsuarioComponent {
 
  mascotas : Mascota[] = [];
  mascotas$ : Observable<Mascota[]>;
  

  constructor(
    private mascotaService : MascotaserviceService
    ) {

    
  }

  ngOnInit() {
    this.getMascota();
  }

  getMascota(): void {
    this.mascotas$ = this.mascotaService.getMascotas();
    this.mascotas$.subscribe(result => { 
      this.mascotas = result; 
  });
  }

}

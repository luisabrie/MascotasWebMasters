import { Component } from '@angular/core';
import { Mascota } from './mascota/mascota.model';
import { MascotaserviceService } from "../services/mascotaservice.service";


import { AddMascotaComponent } from './addMascota/addMascota.component'

@Component({
  selector: 'app-interfazUsuario',
  templateUrl: './interfazUsuario.component.html',
  styleUrls: ['./interfazUsuario.component.css']
})
export class InterfazUsuarioComponent {
  cards = [];
  card: Mascota;
  

  constructor(
    private mascotaService : MascotaserviceService
    ) {
      this.card = new Mascota()
      this.card.estado = "aceptada"
      this.card.name = "N1"
      this.card.Id = 234
      this.card.description="d1"
      this.cards.push(this.card)
    
    
  }

  ngOnInit() {
    //this.getMascota();
  }

  getMascota(): void {
    //this.cards = this.mascotaService.getMascotas();
  }


}

import { Component } from '@angular/core';
import { Mascota } from './interfazUsuario/mascota/mascota.model';
import { MascotaserviceService } from "./services/mascotaservice.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sitio';
  cards = [];
  card: Mascota;
  

  constructor(
    private mascotaService : MascotaserviceService
    ) {
      this.card = new Mascota()
      this.card.estado = "aceptada"
      this.card.name = "reina"
      this.card.Id = 234
      this.card.description="pequeña"
      this.cards.push(this.card)
    
    
  }

  ngOnInit() {
    //this.getMascota();
  }

  getMascota(): void {
    //this.cards = this.mascotaService.getMascotas();
  }


}

import { Component } from '@angular/core';
import { Mascota } from './mascota/mascota.model';
import { MascotaserviceService } from "./services/mascotaservice.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sitio';
  cards = [];
  

  constructor(
    //private mascotaService : MascotaserviceService
    ) {
    
    
  }

  ngOnInit() {
    //this.getMascota();
  }

  getMascota(): void {
    //this.cards = this.mascotaService.getMascotas();
  }


}

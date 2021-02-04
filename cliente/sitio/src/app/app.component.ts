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

  
  constructor(    ) {
    
    
  }

  ngOnInit() {
  
  }


}

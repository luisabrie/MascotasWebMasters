import { Component } from '@angular/core';
import { Direccion } from '../direct/direct.model';
import { DireccionService } from "../../services/direccion.service";
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent{

  direcciones : Direccion[] = [];
  direcciones$ : Observable<Direccion[]>;
  

  constructor(
    private direccionService : DireccionService
    ) {

  }

  ngOnInit() {
    this.getMascota();
  }

  getMascota(): void {
    this.direcciones$ = this.direccionService.getDirecciones();
    this.direcciones$.subscribe(result => { 
      this.direcciones = result; 
  });
  }

  parentMethod(data){
    this.ngOnInit();
  }

}

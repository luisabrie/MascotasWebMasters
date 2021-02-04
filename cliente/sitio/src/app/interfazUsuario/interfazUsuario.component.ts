import { Component } from '@angular/core';
import { Mascota } from './mascota/mascota.model';
import { MascotaserviceService } from "../services/mascotaservice.service";
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { BarData } from '../bar-chart/bar-data';

@Component({
  selector: 'app-interfazUsuario',
  templateUrl: './interfazUsuario.component.html',
  styleUrls: ['./interfazUsuario.component.css']
})
export class InterfazUsuarioComponent {

  mascotas : Mascota[] = [];
  mascotas$ : Observable<Mascota[]>;

  data: Observable<BarData>;
  private typeURL: string = "http://localhost:3000/api/mascotas/estado"


  constructor(
    private mascotaService : MascotaserviceService, private http: HttpClient
    ) {
      this.data = this.http.get<BarData>(this.typeURL);

    
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

  parentMethod(data){
    this.ngOnInit();
  }

}

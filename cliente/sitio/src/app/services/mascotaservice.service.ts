import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../mascota/mascota.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaserviceService {
  private updateUrl: string = "/mascotas/updatemascota/";
  private deleteUrl: string = "/mascotas/deletemascota/";
  private mascotaUrl : string = "/mascotas/addmascota/";

  constructor(private http: HttpClient) { }

  //get mascotas
  getMascotas(): Observable<any> {
    //return mascotas ;
    return this.http.get("http://localhost:3000/mascotas");
  }
  //update mascota
  updateMascota(id: number, editMascota: Mascota): Observable<Mascota>{
    return this.http.put<Mascota>(this.updateUrl + id, editMascota);
  }

  //insert mascota
   insertMascota(newMascota : Mascota) :  Observable<Mascota> 
   {
       return this.http.post<Mascota>(this.mascotaUrl, newMascota);
   }

  //delete mascota
  deleteMascota(id: number) : Observable<any>
    {
        return this.http.delete(this.deleteUrl + id);
    }


}

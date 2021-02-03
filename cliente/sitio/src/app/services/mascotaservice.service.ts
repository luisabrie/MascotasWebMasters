import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Mascota } from '../interfazUsuario/mascota/mascota.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaserviceService {
  private updateUrl: string = "http://localhost:3000/api/mascotas/updatemascota/";
  private deleteUrl: string = "http://localhost:3000/api/mascotas/deletemascota/";
  private mascotaUrl : string = "http://localhost:3000/api/mascotas/addmascota/";
  private baseUrl : string = "http://localhost:3000/api/mascotas";
  private mascota$: Observable<Mascota[]>;

  constructor(private http: HttpClient) { }

  //get mascotas
  getMascotas(): Observable<Mascota[]> {
    //return mascotas ;
    if (!this.mascota$) 
        {
            this.mascota$ = this.http.get<Mascota[]>(this.baseUrl).pipe(shareReplay());
        }

         // if products cache exists return it
        return this.mascota$;
  }

  //update mascota
  updateMascota(id: number, editMascota: Mascota): Observable<Mascota>{
    return this.http.put<Mascota>(this.updateUrl, editMascota);
  }

  //insert mascota
   insertMascota(newMascota : Mascota) :  Observable<Mascota> 
   {
       return this.http.post<Mascota>(this.mascotaUrl, newMascota);
   }

  //delete mascota
  deleteMascota(id: number) : Observable<any>
    {
        return this.http.delete(this.deleteUrl+id);
    }

    clearCache() 
    {
        this.mascota$ = null;
    }

}

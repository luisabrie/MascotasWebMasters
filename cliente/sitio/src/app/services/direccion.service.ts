import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Direccion } from '../interfazUsuario/direct/direct.model';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  private updateUrl: string = "http://localhost:3000/api/direcciones/updatedireccion/";
  private deleteUrl: string = "http://localhost:3000/api/direcciones/deletedireccion/";
  private direccionUrl : string = "http://localhost:3000/api/direcciones/adddireccion/";
  private baseUrl : string = "http://localhost:3000/api/direcciones";
  private direccion$: Observable<Direccion[]>;

  constructor(private http: HttpClient) { }

  //get direcciones
  getDirecciones(): Observable<Direccion[]> {
    //return direcciones ;
    if (!this.direccion$) 
        {
            this.direccion$ = this.http.get<Direccion[]>(this.baseUrl).pipe(shareReplay());
        }

         // if products cache exists return it
        return this.direccion$;
  }

  //update direccion
  updateDireccion(id: number, editDireccion: Direccion): Observable<Direccion>{
    return this.http.put<Direccion>(this.updateUrl, editDireccion);
  }

  //insert direccion
   insertDireccion(newDireccion : Direccion) :  Observable<Direccion> 
   {
       return this.http.post<Direccion>(this.direccionUrl, newDireccion);
   }

  //delete direccion
  deleteDireccion(id: number) : Observable<any>
    {
        return this.http.delete(this.deleteUrl+id);
    }

    clearCache() 
    {
        this.direccion$ = null;
    }


}
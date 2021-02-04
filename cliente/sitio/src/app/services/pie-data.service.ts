import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, retry, shareReplay } from 'rxjs/operators';
import { Mascota } from '../interfazUsuario/mascota/mascota.model';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { PieData } from '../pie-chart/pie-data';

@Injectable()
export class PieDataService {
    private typeURL: string = "http://localhost:3000/api/mascotas/tipo"
    private mascota$: Observable<PieData[]>;

    constructor(private http: HttpClient){}

    getMascotasTipo(): Observable<PieData[]> {
        return this.http.get<PieData[]>(this.typeURL).pipe(shareReplay());
      }



}

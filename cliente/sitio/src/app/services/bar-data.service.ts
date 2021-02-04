import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, retry, shareReplay } from 'rxjs/operators';
import { Mascota } from '../interfazUsuario/mascota/mascota.model';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { BarData } from '../bar-chart/bar-data';

@Injectable()
export class BarDataService {
    private typeURL: string = "http://localhost:3000/api/mascotas/estado"
    private mascota$: Observable<BarData[]>;

    constructor(private http: HttpClient){}

    getMascotasEstado(): Observable<BarData[]> {
        return this.http.get<BarData[]>(this.typeURL).pipe(shareReplay());
      }



}

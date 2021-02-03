import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario} from '../components/user/registrar/usuario.model'
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  private createUrl: string = "http://localhost:3000/api/usuarios/addusuario"
  private usuario$: Observable<Usuario[]>;


  constructor(private http: HttpClient) { }


  //insert Usuario
  insertUsuario(newUsuario : Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(this.createUrl, newUsuario);
  }

  clearCache() {
      this.usuario$ = null;
  }






}

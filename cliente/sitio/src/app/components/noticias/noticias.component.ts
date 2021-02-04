import { Component, Input, ViewChild,AfterViewInit,
  ElementRef, TemplateRef, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias:[];
  filtro_noticia=''
  contenidoPrincipal={"titulo":"titulo1", "comentario":"comentario principal","noticia":""}
  conversionNoticia:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/noticias')
    .subscribe(data=>{
      this.conversionNoticia=data;
      this.noticias=this.conversionNoticia;

      console.log(this.noticias);
    });

  }

  @ViewChild('comentarioId',{read: ElementRef}) comentario_: ElementRef;
  @ViewChild('tituloId',{read: ElementRef}) titulo_: ElementRef;
  @ViewChild('noticiaId',{read: ElementRef}) noticia_: ElementRef;

  _/*obtener(){
    this.contenidoPrincipal.comentario=this.comentario_.nativeElement.value;
    this.contenidoPrincipal.titulo=this.titulo_.nativeElement.value;
    this.contenidoPrincipal.noticia=this.noticia_.nativeElement.value;


  }*/

  ngAfterViewInit() {
    this.contenidoPrincipal.comentario=this.comentario_.nativeElement.textContent;
    this.contenidoPrincipal.titulo=this.titulo_.nativeElement.value;
    this.contenidoPrincipal.noticia=this.noticia_.nativeElement.value;
    console.log(this.contenidoPrincipal)
  }
 

  handleSearch(value: string){
    this.filtro_noticia=value;
    console.log(value);
  }


}

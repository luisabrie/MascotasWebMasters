import { Component, Input, ViewChild, TemplateRef, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
//import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias:[];
  filtro_noticia=''
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

  handleSearch(value: string){
    this.filtro_noticia=value;
    console.log(value);
  }


}

import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  filtroNoticias=new FormControl('');

  constructor() { }

  ngOnInit(){
    this.filtroNoticias.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value=>this.filtroEmiter.emit(value))

  }

  @Output('buscar') filtroEmiter = new EventEmitter<String>();



}

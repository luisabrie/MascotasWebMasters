import { Router } from "@angular/router"
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent implements OnInit {
  insertForm: FormGroup;
  nombre: FormControl;
  fecha_nacimiento:FormControl;
  lugar_origen:FormControl;
  correo:FormControl;
  detalles:FormControl;

  lugares = [
    { id: 1, name: "Guayaquil" },
    { id: 2, name: "Quito" },
    { id: 3, name: "Cuenca" },
    { id: 4, name: "Machala" },
    { id: 5, name: "Ibarra" },
    { id: 6, name: "Duran" },
    { id: 7, name: "Manta" },
    { id: 8, name: "Latacunga" },
    { id: 9, name: "Loja" },
    { id: 10, name: "Esmeraldas" }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router){
    }
    onSubmit(){
      let newUsuario = this.insertForm.value;
      console.log(newUsuario)
    }
  ngOnInit() {

    this.nombre = new FormControl('', [Validators.required, Validators.maxLength(100)]);
    this.fecha_nacimiento = new FormControl('', [Validators.required, Validators.required]);
    this.lugar_origen = new FormControl('', [Validators.required]);
    this.correo = new FormControl('', [Validators.required]);
    this.detalles= new FormControl('', [Validators.required, Validators.maxLength(300)]);


    this.insertForm = this.fb.group({

            'nombre' : this.nombre,
            'fecha_nacimiento' : this.fecha_nacimiento,
            'lugar_origen': this.lugar_origen,
            'correo': this.correo,
            'detalles':this.detalles
            });


}


}

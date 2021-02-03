
import { Router } from "@angular/router"
import { Component, Input, ViewChild, TemplateRef, OnInit } from '@angular/core';



import { Usuario } from '../registrar/usuario.model';
import { UsuarioService } from "../../../services/usuario.service";




import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})



export class RegistrarComponent implements OnInit {

  // For the FormControl - Add mascota
  insertForm: FormGroup;
  nombre: FormControl;
  apellido: FormControl;
  correo: FormControl;
  password: FormControl;

  modalMessage : string;
  modalRef : BsModalRef;
  //selectedUsuario : Usuario;


  constructor(
    private fb: FormBuilder,
    private usuarioService : UsuarioService,
    private router: Router) {

  }

  onSubmit(){
    let newUsuario = this.insertForm.value;

        this.usuarioService.insertUsuario(newUsuario).subscribe(
            result => 
            {
                this.usuarioService.clearCache();
                console.log("Nuevo usuario añadido");
            },
            error => console.log('No se pudo añadir nuevo usuario')
              
            )
            return this.router.navigate(["/user/login"])

  }

  ngOnInit() {

    this.nombre = new FormControl('', [Validators.required, Validators.maxLength(50)]);
    this.apellido = new FormControl('', [Validators.required, Validators.maxLength(150)]);
    this.correo = new FormControl('', [Validators.required]);
    this.password= new FormControl('', [Validators.required, Validators.maxLength(50)]);


    this.insertForm = this.fb.group({

            'nombre' : this.nombre,
            'apellido' : this.apellido,
            'correo': this.correo,
            'password': this.password,
            });


}

}

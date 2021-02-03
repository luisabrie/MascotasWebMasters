import { Component, Input, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Mascota } from '../mascota/mascota.model';
import { MascotaserviceService } from "../../services/mascotaservice.service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-addMascota',
  templateUrl: './addMascota.component.html',
  styleUrls: ['./addMascota.component.css']
})
export class AddMascotaComponent implements OnInit {

  // For the FormControl - Add mascota
  insertForm: FormGroup;
  nombre: FormControl;
  descripcion: FormControl;
  tipo: FormControl;
  raza: FormControl;
  color: FormControl;


   // Add Modal
  @ViewChild('template') modal : TemplateRef<any>;
  modalMessage : string;
  modalRef : BsModalRef;
  selectedMascota : Mascota;

  mascotas : Mascota[] = [];
  mascotas$ : Observable<Mascota[]>;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private mascotaService : MascotaserviceService,
    ) {

  }

  onSubmit(){
    let newMascota = this.insertForm.value;

        this.mascotaService.insertMascota(newMascota).subscribe(
            result => 
            {
                this.mascotaService.clearCache();
                this.mascotas$ = this.mascotaService.getMascotas();

                    this.mascotas$.subscribe(newlist => {
                    this.mascotas = newlist;
                    this.modalRef.hide();
                    this.insertForm.reset();
                
                    });
                console.log("Nueva mascota añadida");

            },
            error => console.log('No se pudo añadir nueva mascota')
              
            )

  }

  onAddMascota()
  {
      this.modalRef = this.modalService.show(this.modal);
  }


  ngOnInit() {

      this.nombre = new FormControl('', [Validators.required, Validators.maxLength(50)]);
      this.descripcion = new FormControl('', [Validators.required, Validators.maxLength(150)]);
      this.tipo = new FormControl('', [Validators.required]);
      this.raza= new FormControl('', [Validators.required, Validators.maxLength(50)]);
      this.color = new FormControl('', [Validators.required, Validators.maxLength(50)]);


      this.insertForm = this.fb.group({

              'nombre' : this.nombre,
              'descripcion' : this.descripcion,
              'tipo': this.tipo,
              'raza': this.raza,
              'color': this.color,
              });


  }

}

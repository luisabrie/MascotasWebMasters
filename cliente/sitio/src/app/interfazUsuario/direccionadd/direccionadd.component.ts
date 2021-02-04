
import { Component, Input, ViewChild, TemplateRef, OnInit, Output, EventEmitter } from '@angular/core';
import { Direccion } from '../direct/direct.model';
import { DireccionService } from "../../services/direccion.service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-direccionadd',
  templateUrl: './direccionadd.component.html',
  styleUrls: ['./direccionadd.component.css']
})
export class DireccionaddComponent implements OnInit {

  @Output()
  notify: EventEmitter<Direccion[]> = new EventEmitter<Direccion[]>();

  // For the FormControl - Add direccion
  insertForm: FormGroup;
  calle_principal: FormControl;
  calle_secundario: FormControl;
  numero: FormControl;
  referencia: FormControl;

  // Add Modal
  @ViewChild('template') modal : TemplateRef<any>;
  modalMessage : string;
  modalRef : BsModalRef;
  selectedDireccion : Direccion;

  direcciones : Direccion[] = [];
  direcciones$ : Observable<Direccion[]>;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private direccionService : DireccionService,
    ) {

  }

  onSubmit(){
    let newDireccion = this.insertForm.value;

        this.direccionService.insertDireccion(newDireccion).subscribe(
            result => 
            {
                this.direccionService.clearCache();
                this.direcciones$ = this.direccionService.getDirecciones();

                    this.direcciones$.subscribe(newlist => {
                    this.direcciones = newlist;
                    this.modalRef.hide();
                    this.insertForm.reset();
                
                    });
                console.log("Nueva direccion añadida");
                this.notify.emit(this.direcciones)

            },
            error => console.log('No se pudo añadir nueva direccion')
              
            )

  }

  onAddMascota()
  {
      this.modalRef = this.modalService.show(this.modal);
  }


  ngOnInit() {

      this.calle_principal = new FormControl('', [Validators.required, Validators.maxLength(150)]);
      this.calle_secundario = new FormControl('', [Validators.required, Validators.maxLength(150)]);
      this.numero = new FormControl('', [Validators.required]);
      this.referencia= new FormControl('', [Validators.required, Validators.maxLength(150)]);


      this.insertForm = this.fb.group({

              'calle_principal' : this.calle_principal,
              'calle_secundario' : this.calle_secundario,
              'numero': this.numero,
              'referencia': this.referencia,
              });


  }

}


import { Component, Input, ViewChild, TemplateRef, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

import { DireccionService } from "../../services/direccion.service";


import { Direccion } from './direct.model';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {

  @Output()
  notify: EventEmitter<Direccion[]> = new EventEmitter<Direccion[]>();

  // actualizar mascota
  updateForm: FormGroup;
  _calle_principal: FormControl;
  _calle_secundario: FormControl;
  _id: FormControl;
  _numero: FormControl;
  _referencia: FormControl;

  //Info Modal
  @ViewChild('infoTemplate') viewmodal : TemplateRef<any>;
  // Update Modal
  @ViewChild('editTemplate') editmodal : TemplateRef<any>;
  //Delete Modal
  @ViewChild('deleteTemplate') deletemodal : TemplateRef<any>;

  // Modal properties
  modalMessage : string;
  modalRef : BsModalRef;
  selectedDireccion : Direccion;
  direcciones$ : Observable<Direccion[]>;
  direcciones : Direccion[] = [];


  @Input('direccion') direccion: Direccion;

  id: number;
  verificacion: boolean;


  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private direccionService : DireccionService,
    ) { 

  }

  onDelete() : void
  {
      this.direccionService.deleteDireccion(this.id).subscribe(result => 
      {
        this.direcciones$ = this.direccionService.getDirecciones();
          this.direcciones$.subscribe(newlist => 
          {
              this.direcciones = newlist;
              
          })
      })
      this.modalRef.hide();
      this.notify.emit(this.direcciones);
  }

  onUpdate(): void{
    let editMascota = this.updateForm.value;
    this.direccionService.updateDireccion(this.id, editMascota).subscribe(
      result => 
      {
          console.log('Datos de mascota actualizados');
          this.direccionService.clearCache();
          this.direcciones$ = this.direccionService.getDirecciones();
          this.direcciones$.subscribe(updatedlist => 
           { 
              this.direcciones = updatedlist; 

                this.modalRef.hide();
          });
          this.notify.emit(this.direcciones);
      },
          error => console.log('No se pudo realizar la actualización')
      )

   
  }

  onDeleteModal(){
    this.modalRef = this.modalService.show(this.deletemodal);
  }

  onDisplay(){
    this.modalRef = this.modalService.show(this.viewmodal);
  }
  onUpdateModal(direccionEdit: Direccion) : void
    {
        this._id.setValue(direccionEdit.id)
        this._calle_principal.setValue(direccionEdit.calle_principal);
        this._calle_secundario.setValue(direccionEdit.calle_secundario);
        this._numero.setValue(direccionEdit.numero);
        this._referencia.setValue(direccionEdit.referencia);

        this.updateForm.setValue({
            'id': this._id.value,
            'calle_principal' : this._calle_principal.value,
            'calle_secundario' : this._calle_secundario.value,
            'numero': this._numero.value,
            'referencia': this._referencia.value,
         });
         this.modalRef = this.modalService.show(this.editmodal);
        

    }

    ngOnInit() {
      this.id = this.direccion.id
      this.verificacion = this.direccion.verificacion
  
      this._calle_principal = new FormControl('',[Validators.required, Validators.maxLength(50)]); ;
      this._calle_secundario = new FormControl('', [Validators.required, Validators.maxLength(150)]);
      this._id = new FormControl('');
      this._numero = new FormControl('',[Validators.required, Validators.maxLength(50)]);
      this._referencia = new FormControl('',[Validators.required, Validators.maxLength(50)]);
  
      this.updateForm = this.fb.group(
          {
              'id': this._id,
              'calle_principal' : this._calle_principal,
              'calle_secundario' : this._calle_secundario,
              'numero': this._numero,
              'referencia': this._referencia,
          });
      
  
    }








}

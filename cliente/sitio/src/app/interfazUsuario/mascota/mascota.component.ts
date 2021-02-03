import { Component, Input, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Mascota } from './mascota.model';
import { MascotaserviceService } from "../../services/mascotaservice.service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  // actualizar mascota
  updateForm: FormGroup;
  _nombre: FormControl;
  _descripcion: FormControl;
  _id: FormControl;
  _raza: FormControl;
  _color: FormControl;

  //Info Modal
  @ViewChild('infoTemplate') viewmodal : TemplateRef<any>;
  // Update Modal
  @ViewChild('editTemplate') editmodal : TemplateRef<any>;
  
      // Modal properties
      modalMessage : string;
      modalRef : BsModalRef;
      selectedMascota : Mascota;
      mascotas$ : Observable<Mascota[]>;
      mascotas : Mascota[] = [];


  @Input('mascota') mascota: Mascota;
  id: number;
  verificacion: boolean;


  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private mascotaService : MascotaserviceService,
    ) { 

  }

  onDelete(mascota : Mascota) : void{
      this.mascotaService.deleteMascota(mascota.id).subscribe(result => 
      {
          this.mascotaService.clearCache();
          this.mascotas$ = this.mascotaService.getMascotas();
          this.mascotas$.subscribe(newlist => 
          {
              this.mascotas = newlist;
          })

      })
  }

  onUpdate(): void{
    let editMascota = this.updateForm.value;
    this.mascotaService.updateMascota(this.id, editMascota).subscribe(
      result => 
      {
          console.log('Datos de mascota actualizados');
          this.mascotaService.clearCache();
          this.mascotas$ = this.mascotaService.getMascotas();
          this.mascotas$.subscribe(updatedlist => 
           { 
              this.mascotas = updatedlist; 

                this.modalRef.hide();
          });
      },
          error => console.log('No se pudo realizar la actualización')
      )

   
  }

  onDisplay(){
    this.modalRef = this.modalService.show(this.viewmodal);
  }
  onUpdateModal(mascotaEdit: Mascota) : void
    {
        this._id.setValue(mascotaEdit.id)
        this._nombre.setValue(mascotaEdit.nombre);
        this._descripcion.setValue(mascotaEdit.descripcion);
        this._raza.setValue(mascotaEdit.raza);
        this._color.setValue(mascotaEdit.color);

        this.updateForm.setValue({
            'id': this._id.value,
            'nombre' : this._nombre.value,
            'descripcion' : this._descripcion.value,
            'raza': this._raza.value,
            'color': this._color.value,
         });
         this.modalRef = this.modalService.show(this.editmodal);
        

    }



  ngOnInit() {
    this.id = this.mascota.id
    this.verificacion = this.mascota.verificacion

    this._nombre = new FormControl('',[Validators.required, Validators.maxLength(50)]); ;
    this._descripcion = new FormControl('', [Validators.required, Validators.maxLength(150)]);
    this._id = new FormControl('');
    this._raza = new FormControl('',[Validators.required, Validators.maxLength(50)]);
    this._color = new FormControl('',[Validators.required, Validators.maxLength(50)]);

    this.updateForm = this.fb.group(
        {
            'id': this._id,
            'nombre' : this._nombre,
            'descripcion' : this._descripcion,
            'raza': this._raza,
            'color': this._color,
        });
    

  }

}
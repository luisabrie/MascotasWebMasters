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
  _name: FormControl;
  _description: FormControl;
  _id: FormControl;

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
  ID: number;
  estado: string;


  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private mascotaService : MascotaserviceService,
    ) { 

  }

  onDelete(mascota: Mascota): void{
   this.mascotaService.deleteMascota(this.ID)

  }

  onUpdate(mascota: Mascota): void{
    let editMascota = this.updateForm.value;
    this.mascotaService.updateMascota(this.ID, editMascota).subscribe(
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
      this.modalRef = this.modalService.show(this.editmodal);
        this._id.setValue(mascotaEdit.Id);
        this._name.setValue(mascotaEdit.name);
        this._description.setValue(mascotaEdit.description);

        this.updateForm.setValue({
            'id' : this._id.value,
            'name' : this._name.value,
            'description' : this._description.value,
         });
        

    }



  ngOnInit() {
    this.ID = this.mascota.Id
    this.estado = this.mascota.estado

    this._name = new FormControl('',[Validators.required, Validators.maxLength(50)]); ;
    this._description = new FormControl('', [Validators.required, Validators.maxLength(150)]);
    this._id = new FormControl();

    this.updateForm = this.fb.group(
        {
            'id' : this._id,
            'name' : this._name,
            'description' : this._description,
        });
    

  }

}
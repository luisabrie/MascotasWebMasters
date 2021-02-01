import { Component, Input, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Mascota } from './mascota.model';
import { MascotaserviceService } from "../services/mascotaservice.service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

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

  // Update Modal
  @ViewChild('editTemplate') editmodal : TemplateRef<any>;
      // Modal properties
      modalMessage : string;
      modalRef : BsModalRef;
      selectedMascota : Mascota;

      mascotas : Mascota[] = [];


  @Input('mascota') mascota: Mascota;


  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    //private mascotaService : MascotaserviceService,
    ) { 

  }

  onDelete(mascota: Mascota): void{
   // this.mascotaService.deleteMascota(mascota.Id)

  }

  onUpdate(mascota: Mascota): void{
    let editMascota = this.updateForm.value;
    //this.mascotaService.updateMascota(editMascota.id, editMascota)
  }

  onUpdateModal(mascotaEdit: Mascota) : void
    {/*
        this._id.setValue(mascotaEdit.Id);
        this._name.setValue(mascotaEdit.name);
        this._description.setValue(mascotaEdit.description);

        this.updateForm.setValue({
            'id' : this._id.value,
            'name' : this._name.value,
            'description' : this._description.value,
         });*/
        this.modalRef = this.modalService.show(this.editmodal);

    }



  ngOnInit() {

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
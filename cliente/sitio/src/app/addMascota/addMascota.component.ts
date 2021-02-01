import { Component, Input, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Mascota } from '../mascota/mascota.model';
import { MascotaserviceService } from "../services/mascotaservice.service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addMascota',
  templateUrl: './addMascota.component.html',
  styleUrls: ['./addMascota.component.css']
})
export class AddMascotaComponent implements OnInit {

  // For the FormControl - Add mascota
  insertForm: FormGroup;
  name: FormControl;
  description: FormControl;


   // Add Modal
  @ViewChild('template') modal : TemplateRef<any>;
  modalMessage : string;
  modalRef : BsModalRef;
  selectedMascota : Mascota;

  mascotas : Mascota[] = [];

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private mascotaService : MascotaserviceService,
    ) {

  }

  onSubmit(){

  }

  onAddMascota()
  {
      this.modalRef = this.modalService.show(this.modal);
  }


  ngOnInit() {

      this.name = new FormControl('', [Validators.required, Validators.maxLength(50)]);
      this.description = new FormControl('', [Validators.required, Validators.maxLength(150)]);

      this.insertForm = this.fb.group({

              'name' : this.name,
              'description' : this.description,

              });


  }

}

import { Component, OnInit ,Input, OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ProyectoService } from 'src/app/services/common/proyecto.service';

@Component({
  selector: 'app-proyect-value-item',
  templateUrl: './proyect-value-item.component.html',
  styleUrls: ['./proyect-value-item.component.css']
})
export class ProyectValueItemComponent implements OnInit, OnChanges {
  @Input() proyectItem:any

  registerForm = this.formBuilder.group({
    name: ['', {
    }],
    date: ['', {
      }],
    decription: ['', {
    }],
    evidence: ['', {
    }],
  });

  constructor(
    private formBuilder:FormBuilder,
    private proyectService:ProyectoService
  ) { }

  ngOnInit(): void {
    this.registerForm.controls['name'].setValue(this.proyectItem.name);
    this.registerForm.controls['date'].setValue(this.proyectItem.date);
    this.registerForm.controls['decription'].setValue(this.proyectItem.decription);
    this.registerForm.controls['evidence'].setValue(this.proyectItem.evidence);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Cambio en proyectoItem: "+changes)
  }

  submitModal(){
    this.proyectService.editProyect(this.registerForm,this.proyectItem.id);
  }
}

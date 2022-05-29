import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ProyectoService } from 'src/app/services/common/proyecto.service';

@Component({
  selector: 'app-proyect-complete-item',
  templateUrl: './proyect-complete-item.component.html',
  styleUrls: ['./proyect-complete-item.component.css']
})
export class ProyectCompleteItemComponent implements OnInit {

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
  }

  submitModal(){
    this.proyectService.createProyect(this.registerForm)
  }

}

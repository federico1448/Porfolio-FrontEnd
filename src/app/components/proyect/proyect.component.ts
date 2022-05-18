import { Component, Input, OnInit } from '@angular/core';
import { Proyects } from 'src/app/interfaces/proyect';
import { PROYECT } from 'src/app/mocks/mockProyecto';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  @Input() proyects:Proyects[]=PROYECT;
  title:string="Proyectos"
  constructor() { }

  ngOnInit(): void {
  }

}

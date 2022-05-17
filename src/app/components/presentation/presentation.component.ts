import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  title="Federico Nicolas Bitonte"
  image="assets/foto.jpg";
  desc="Resolución de problemas. Trabajo en equipo. Coordinación y administración."
  titulos: any[]=[
    "Full Stack Developer Jr.",
    "Project manager.",
    "Soporte administrativo.",
    "Soporte de preventa."
  ]

  constructor() { }

  ngOnInit(): void {

  }

}

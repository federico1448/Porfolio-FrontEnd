import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/mockExperiencia';
import { Experience } from 'src/app/expercience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title="Experiencia Laboral";
  experiencias: Experience[]= Experiencia
  constructor() { }

  ngOnInit(): void {
  }

}

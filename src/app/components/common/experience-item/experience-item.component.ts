import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/interfaces/expercience';
import { Experiencia } from 'src/app/mocks/mockExperiencia';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input() expItem:Experience=Experiencia[0];
  constructor() { }

  ngOnInit(): void {
  }

}

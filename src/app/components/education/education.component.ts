import { Component, OnInit , Input} from '@angular/core';
import { Education } from 'src/app/interfaces/education';
import { EDUCATION } from 'src/app/mocks/mockEducation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() educacion:Education []= EDUCATION;
  title:string="Educacion"
  constructor() { }

  ngOnInit(): void {
  }

}

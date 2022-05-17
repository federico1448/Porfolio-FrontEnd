import { Component, OnInit , Input} from '@angular/core';
import { Education } from 'src/app/interfaces/education';
import { EDUCATION } from 'src/app/mocks/mockEducation';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input() educacionvalue:Education=EDUCATION[0];
  constructor() { }

  ngOnInit(): void {
  }

}

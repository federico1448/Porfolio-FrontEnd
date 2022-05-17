import { Component, OnInit ,Input} from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';
import { SKILL } from 'src/app/mocks/mockSkill';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})

export class SkillItemComponent implements OnInit {
  @Input() skillvalue:Skill = SKILL[0];
  constructor() { }

  ngOnInit(): void {
  }

  obtainPorcent(): void{
  }

}
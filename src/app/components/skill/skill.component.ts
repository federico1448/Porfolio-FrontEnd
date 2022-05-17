import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';
import { SKILL } from 'src/app/mocks/mockSkill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skills:Skill[] =SKILL;  
  title:string ="Hard & Soft Skills"
  constructor() { }

  ngOnInit(): void {
  }

}

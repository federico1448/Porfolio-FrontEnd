import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SkillService } from 'src/app/services/common/skill.service';

@Component({
  selector: 'app-skill-complete-item',
  templateUrl: './skill-complete-item.component.html',
  styleUrls: ['./skill-complete-item.component.css']
})
export class SkillCompleteItemComponent implements OnInit {
  registerForm = this.formBuilder.group({
    name: ['', {
    }],
    porcent: ['', {
      }],
  });

  constructor(
    private formBuilder:FormBuilder,
    private skillService:SkillService
  ) { }

  ngOnInit(): void {
  }

  submitModal(){
    this.skillService.createSkill(this.registerForm)
  }
}

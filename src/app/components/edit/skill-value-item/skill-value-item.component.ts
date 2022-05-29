import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,FormArray,Validators} from '@angular/forms';
import { SkillService } from 'src/app/services/common/skill.service';

@Component({
  selector: 'app-skill-value-item',
  templateUrl: './skill-value-item.component.html',
  styleUrls: ['./skill-value-item.component.css']
})
export class SkillValueItemComponent implements OnInit {
  @Input() skill:any
  registerForm = this.formBuilder.group({
    name: ['',{}],
    porcent: ['',{}],
  });

  constructor(
    private formBuilder:FormBuilder,
    private skillService:SkillService
  ) { }

  ngOnInit(): void {
    this.registerForm.controls['name'].setValue(this.skill.name);
    this.registerForm.controls['porcent'].setValue(this.skill.porcent);
  }

  submitModal(){
    this.skillService.updateSkill(this.registerForm,this.skill.id)
  }

}

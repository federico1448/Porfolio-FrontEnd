import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ExperienceService } from 'src/app/services/common/experience.service';

@Component({
  selector: 'app-experience-value-item',
  templateUrl: './experience-value-item.component.html',
  styleUrls: ['./experience-value-item.component.css']
})
export class ExperienceValueItemComponent implements OnInit {
  @Input() experienceItem:any;
  registerForm = this.formBuilder.group({
    name: ['', {
    }],
    period: ['', {
      }],
    puesto: ['', {
      }],
    desciption: ['', {
      }],
  });

  constructor(
    private formBuilder:FormBuilder,
    private experienceService:ExperienceService
  ) { }

  ngOnInit(): void {
    this.registerForm.controls['name'].setValue(this.experienceItem.name);
    this.registerForm.controls['period'].setValue(this.experienceItem.period);
    this.registerForm.controls['puesto'].setValue(this.experienceItem.puesto);
    this.registerForm.controls['desciption'].setValue(this.experienceItem.desciption);
  }

  submitModal(){
    this.experienceService.updateExperience(this.registerForm,this.experienceItem.id)
  }

}

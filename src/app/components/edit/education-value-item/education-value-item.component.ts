import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { EducationService } from 'src/app/services/common/education.service';

@Component({
  selector: 'app-education-value-item',
  templateUrl: './education-value-item.component.html',
  styleUrls: ['./education-value-item.component.css']
})
export class EducationValueItemComponent implements OnInit {
  @Input() education:any;
  logousado:any;
  selectedFiles?: FileList;
  registerForm = this.formBuilder.group({
    name: ['',{}],
    site: ['',{}],
    year: ['',{}]
  });

  constructor(
    private formBuilder:FormBuilder,
    private educationService:EducationService
  ) { }

  ngOnInit(): void {
    this.registerForm.controls['name'].setValue(this.education.name);
    this.registerForm.controls['year'].setValue(this.education.year);
    this.registerForm.controls['site'].setValue(this.education.site);
  }

  onFileSelected(event:any){
    this.selectedFiles = event.target.files;
  }

  submitModal(){
    this.educationService.updateEducation(this.registerForm,this.education.id)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ExperienceService } from 'src/app/services/common/experience.service';

@Component({
  selector: 'app-experience-complete-item',
  templateUrl: './experience-complete-item.component.html',
  styleUrls: ['./experience-complete-item.component.css']
})
export class ExperienceCompleteItemComponent implements OnInit {
  registerForm = this.formBuilder.group({
    name: ['', {
    }],
    period: ['', {
      }],
    puesto: ['', {
      }],
    desciption: ['', {
      }],
    file: ['', {
      }],
  });

  selectedFile!:File;
  selectedFiles?: FileList;
  currentFile?: File;

  constructor(
    private formBuilder:FormBuilder,
    private experienceService:ExperienceService
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any){
    this.selectedFile=<File>event.target.files[0];
    this.selectedFiles = event.target.files;
  }

  submitModal(){
    this.experienceService.createExperience(this.registerForm,this.selectedFile)
  }

}

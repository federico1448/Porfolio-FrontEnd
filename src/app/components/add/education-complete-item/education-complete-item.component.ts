import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/common/education.service';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-education-complete-item',
  templateUrl: './education-complete-item.component.html',
  styleUrls: ['./education-complete-item.component.css']
})
export class EducationCompleteItemComponent implements OnInit {
  registerForm = this.formBuilder.group({
    name: ['', {
    }],
    site: ['', {
      }],
    year: ['', {
      }],
    file: ['', {
      }],
  });

  selectedFile!:File;
  selectedFiles?: FileList;
  currentFile?: File;

  constructor(
    private formBuilder:FormBuilder,
    private educationService:EducationService
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any){
    this.selectedFile=<File>event.target.files[0];
    this.selectedFiles = event.target.files;
  }


  submitModal(){
    this.educationService.createEducation(this.registerForm,this.selectedFile)
  }

}

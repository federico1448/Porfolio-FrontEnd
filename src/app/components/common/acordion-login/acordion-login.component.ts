import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/common/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acordion-login',
  templateUrl: './acordion-login.component.html',
  styleUrls: ['./acordion-login.component.css']
})
export class AcordionLoginComponent implements OnInit {
  title:string="Login";
  @Input() textbtn?: string;
  profileForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    file: new FormControl(''),
  });
  @Output() propagarLogin = new EventEmitter<boolean>();
  selectedFiles?: FileList;
  currentFile?: File;
  fileName = '';
  progress = 0;
  loginfailed:boolean=false;
  loginresult:boolean=false;
  loginform:boolean=true;
  


  constructor(
    private uploadService:AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit():void {
    if(this.textbtn=="Login"){
    const formData = new FormData();
    formData.append("name", this.profileForm.value.name);
    formData.append("password", this.profileForm.value.password);
    this.uploadService.loginstatus(formData).subscribe(response =>{
        this.loginfailed=response;
        this.loginresult=!response;
    });
    }
    else{
      this.uploadService.logut();
      this.loginfailed=false;
      this.loginresult=false;
    }
  }

  changestatus(change:boolean):void{
    this.loginresult=!change;
    if(this.textbtn=="LogOut"){
      this.loginform=false;
    }else{
      this.loginform=true;
    }
  }


  //esto es para el select file
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              console.log(event.body.message);
              //this.message = event.body.message;
              //this.fileInfos = this.uploadService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              //this.message = err.error.message;
              console.log(err.error.message);
            } else {
              //this.message = 'Could not upload the file!';
              console.log('Could not upload the file!');
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }
}


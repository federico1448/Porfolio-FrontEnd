import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  loginfailed:boolean=false;
  loginresult:boolean=false;
  loginform:boolean=true;
  


  constructor(
    private authService:AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit():void {
    if(this.textbtn=="Login"){
    const formData = new FormData();
    formData.append("name", this.profileForm.value.name);
    formData.append("password", this.profileForm.value.password);
    this.authService.loginstatus(formData).subscribe(response =>{
        this.loginfailed=response;
        this.loginresult=!response;
    });
    }
    else{
      this.authService.logut();
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
}


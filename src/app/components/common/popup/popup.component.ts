import { Component, OnInit ,ViewChild} from '@angular/core';
import {Subject,Observable, of as observableOf} from 'rxjs';
import { AuthService } from 'src/app/services/common/auth.service';
import { debounceTime } from 'rxjs/operators';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  loginresultado='';
  loginfail?:Observable<boolean>;

  constructor(
    private autenticadion:AuthService
  ) { }

  ngOnInit(): void {
    this.loginfail=this.autenticadion.loginIssue();
    this.loginfail.subscribe( login=>{
      console.log("login fue exitoso (POPUP) "+ login) 
      this.loginfail=observableOf(login);
      if(!login){
        this.loginresultado="error login"
      }
    })
  }

}

import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { Subscription, Observable ,of as observableOf} from 'rxjs';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/common/auth.service';
import { ElementSchemaRegistry } from '@angular/compiler';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title="Mi Porfolio";
  icono="#YoProgramo";
  subscription?: Subscription;
  isLoggedIn = false;
  isOnPost = false;
  isMenuCollapsed = false;
  faGithub=faGithub;
  faBars=faBars;
  imagePath="assets/argProg.jpg";

  //login
  loginfail?:Observable<boolean>;
  Logintitle:string="Login";


  constructor(
    private autenticadion:AuthService
  ) { 
  }

  ngOnInit(): void {
    this.loginfail=this.autenticadion.logintest();
    this.loginfail.subscribe( login=>{
      console.log("login fue exitoso (POPUP) "+ login) 
      this.loginfail=observableOf(login);
      if(!login)
        this.Logintitle="Login";
      else
        this.Logintitle="LogOut";
      })
  }

//  propagarloginInHeader(loginmensaje:boolean){
//    console.log("login in header: "+ loginmensaje);
//    this.loginresult=loginmensaje;
//    this.propagarLoginHeader.emit(loginmensaje);
//    if(!loginmensaje){
//      this.loginfailed=true;
//    }
//  }

//  showModalService(idimg:string, id:string){
//    this.modalService.open(id);
//    this.gui.blockButton(idimg);
//  }

//  closeModalService(idimg:string, id:string){
//    this.modalService.close(id);
//    this.gui.showButton(idimg);
//  }
}
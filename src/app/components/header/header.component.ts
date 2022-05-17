import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../../services/common/modal.service';
import { GuiService} from '../../services/common/gui.service';


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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private gui: GuiService
  ) { 
  }

  ngOnInit(): void {
  }

  showModalService(idimg:string,idlink:string,idButton:string, id:string){
    this.modalService.open(id);
    this.gui.blockButton(idButton);
    this.gui.blockButton(idimg);
    this.gui.blockButton(idlink);
  }

  closeModalService(idimg:string,idlink:string,idButton:string, id:string){
    this.modalService.close(id);
    this.gui.showButton(idButton);
    this.gui.showButton(idimg);
    this.gui.showButton(idlink);
  }
}

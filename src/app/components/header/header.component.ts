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
  public imagePath="src/app/images/ArgProgIcono.jpg";


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private gui: GuiService
  ) { 
  }

  ngOnInit(): void {
  }

  showModalService(idButton:string, id:string){
    this.modalService.open(id);
    this.gui.blockButton(idButton);
  }

  closeModalService(idButton:string, id:string){
    this.modalService.close(id);
    this.gui.showButton(idButton);
  }
}

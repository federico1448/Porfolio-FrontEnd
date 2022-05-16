import { Component, OnInit,OnDestroy, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../../services/common/modal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription?: Subscription;
  isLoggedIn = false;
  isOnPost = false;
  isMenuCollapsed = false;
  faGithub=faGithub;
  faBars=faBars;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public modalService: ModalService
  ) { 
  }

  ngOnInit(): void {
  }

  showModalService(id:string){
    this.modalService.open(id);
  }

  closeModalService(id:string){
    this.modalService.close(id);
  }
}

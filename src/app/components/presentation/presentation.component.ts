import { Component, OnInit,Input,Output} from '@angular/core';
import { AuthService } from 'src/app/services/common/auth.service';
import { User } from 'src/app/interfaces/user';
import { PresentationService } from 'src/app/services/common/presentation.service';
import { faPen,faCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadimageService } from 'src/app/services/common/uploadimage.service';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})

export class PresentationComponent implements OnInit {
  retrievedImage:any;
  loginstatus:boolean=false;
  user!:User;
  faTimes= faPen;
  faCircle=faCircle;
  perfil:string="fotoperfil"
  idvalue:any;
  

  constructor(
    private autenticadionService:AuthService,
    private presentationService:PresentationService,
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private uploadService:UploadimageService,
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.presentationService.getPresentation().subscribe(
      usuario=>{
        this.user=usuario;
        this.retrievedImage = 'data:image/jpeg;base64,' + usuario.imagenperfil;
        this.idvalue=usuario.id;
      }
    );

    //const val=35;
    //this.uploadService.getFileFirst(val)
    //  .subscribe(
    //    res => {
    //      this.retrievedImage = 'data:image/jpeg;base64,' + res.image;
    //    }
    //  );

    this.autenticadionService.logintest().subscribe( login=>{
      this.loginstatus=login})

    
    this.presentationService.userPresentationCurrent().subscribe(
      usuario=>{
        this.user.id=usuario.id;
        this.user.name=usuario.name;
        this.user.description=usuario.description;
        this.user.titulos=usuario.titulos;
      }
    );
  }

  open(content:any,user:User) {
    this.modalService.open(content);
  }







}

import { Component, OnInit,Input,Output} from '@angular/core';
import { AuthService } from 'src/app/services/common/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { PresentationService } from 'src/app/services/common/presentation.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})

export class PresentationComponent implements OnInit {
  @Input() user:any;
  name="Federico Nicolas Bitonte"
  image="assets/foto.jpg";
  desc="Resolución de problemas. Trabajo en equipo. Coordinación y administración."
  titulos: any[]=[
    "Full Stack Developer Jr.",
    "Project manager.",
    "Soporte administrativo.",
    "Soporte de preventa."
  ]
  //@Input() loginfail:string='false';
  loginstatus?:Observable<any>;
  faTimes= faTimes;
  

  constructor(
    private autenticadion:AuthService,
    private presentationService:PresentationService
  ) { }

  ngOnInit(): void {
    this.loginstatus=this.autenticadion.logintest();
    this.loginstatus.subscribe( login=>{
      console.log("login fue exitoso (PRESENTATION) "+ login)  
      this.loginstatus=login})

    this.presentationService.getPresentation().subscribe(
      usuario=>{
        this.user=usuario;
        console.log("resultado: "+usuario.name);
      }
    );
  }

  editPresentation(user:User):void{
    this.presentationService.editPresentation(user, this.user.id).subscribe( resul =>{
      this.user=resul;
    })
  }







}

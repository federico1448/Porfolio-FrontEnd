import { Component, Input, OnInit } from '@angular/core';
import { Proyects } from 'src/app/interfaces/proyect';
import { ProyectoService } from 'src/app/services/common/proyecto.service';
import { AuthService } from 'src/app/services/common/auth.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPlus,faCircle} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  @Input() proyects:Proyects[]=[];
  title:string="Proyectos"
  loginstatus:boolean=false;
  faPlus=faPlus;
  faCircle=faCircle;
  nameexist:boolean=false;
  
  constructor(
    private proyectsService:ProyectoService,
    private autenticadionService:AuthService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.autenticadionService.logintest().subscribe( login=>{ 
      this.loginstatus=login})

    this.proyectsService.getAllProyects().subscribe( result=>{
      this.proyects=result;
    })

    this.proyectsService.currentProyect().subscribe(
      result =>{
        console.log("llego resultado proycto raiz")
        for (var i = 0; i < this.proyects.length; i++){
          if(this.proyects[i].id===result.id){
            this.proyects[i]=result;
            this.nameexist=true
            break;
          }
        }
        if(!this.nameexist){
          this.proyectsService.getAllProyects().subscribe(
            result =>{
              console.log("login en la recarga: "+ this.loginstatus)
              this.proyects=result;
            }
          )
        }
      }
    )
  }

  openModal(content:any) {
    this.modalService.open(content);
  }

  deleteProyect(proyect:Proyects){
    this.proyectsService.deleteProyect(proyect)
    .subscribe(
      result=>{
        [
          this.proyects =this.proyects.filter( (t)=> t.id != proyect.id)   
        ]
        Swal.fire({
          title:'',
          text:'El Proyecto '+ result.name+' fue eliminado',
          timer: 3000,
          icon: 'success',
          showConfirmButton: false
        })
    })
  }
  
}

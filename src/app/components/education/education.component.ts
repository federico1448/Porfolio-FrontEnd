import { Component, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';
import { Education } from 'src/app/interfaces/education';
import { EducationService } from 'src/app/services/common/education.service';
import { AuthService } from 'src/app/services/common/auth.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPlus,faCircle} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() educacion:Education[]=[];
  title:string="Educacion"
  loginstatus:boolean=false;
  faPlus=faPlus;
  faCircle=faCircle;
  nameexist:boolean=false;
  
  
  constructor(
    private educationService:EducationService,
    private autenticadionService:AuthService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.autenticadionService.logintest().subscribe( login=>{ 
      this.loginstatus=login})

    this.educationService.getAllEducation().subscribe(
      result =>{
        this.educacion=result;})

    this.educationService.currentEducation().subscribe(
      result =>{
        console.log("llego resultado educa raiz")
        for (var i = 0; i < this.educacion.length; i++){
          if(this.educacion[i].id===result.id){
            this.educacion[i]=result;
            this.nameexist=true
            break;
          }
        }
        if(!this.nameexist){
          this.educationService.getAllEducation().subscribe(
            result =>{
              console.log("login en la recarga: "+ this.loginstatus)
              this.educacion=result;
            }
          )
        }
      }
    )
  }

  openModal(content:any) {
    this.modalService.open(content);
  }

  deleteEducacion(educa:Education){
    this.educationService.deleteEducation(educa)
    .subscribe(result=>{
      [
        this.educacion =this.educacion.filter( (t)=> t.id != educa.id)   
      ]
      Swal.fire({
        title:'',
        text:'El Titulo '+ result.name+' fue eliminado',
        timer: 3000,
        icon: 'success',
        showConfirmButton: false
      })
    })
  }
}

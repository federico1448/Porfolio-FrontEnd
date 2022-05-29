import { Component, OnInit ,Input} from '@angular/core';
import { Experience } from 'src/app/interfaces/expercience';
import { ExperienceService } from 'src/app/services/common/experience.service';
import { AuthService } from 'src/app/services/common/auth.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPlus,faCircle} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencias: Experience[]= [];
  title="Experiencia Laboral";
  loginstatus:boolean=false;
  faPlus=faPlus;
  faCircle=faCircle;
  nameexist:boolean=false;
  
  constructor(
    private experienceService:ExperienceService,
    private autenticadionService:AuthService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.autenticadionService.logintest().subscribe( login=>{ 
      this.loginstatus=login})

    this.experienceService.getAllExperience().subscribe(
      result =>{
        this.experiencias=result;
      }
    )

    this.experienceService.currentExperience().subscribe(
      result =>{
        for (var i = 0; i < this.experiencias.length; i++){
          if(this.experiencias[i].name==result.name){
            this.experiencias[i]=result;
            this.nameexist=true
            break;
          }
        }
        if(!this.nameexist){
          this.experienceService.getAllExperience().subscribe(
            result =>{
              console.log("login en la recarga: "+ this.loginstatus)
              this.experiencias=result;
            }
          )
        }
      }
    )
  }

  openModal(content:any) {
    this.modalService.open(content);
  }

  deleteExperience(exp:Experience){
    this.experienceService.deleteExperience(exp).subscribe(
      result=>{
        [
          this.experiencias =this.experiencias.filter( (t)=> t.id != exp.id)   
        ]
        Swal.fire({
          title:'',
          text:'La Experiencia '+ result.name+' fue eliminada',
          timer: 3000,
          icon: 'success',
          showConfirmButton: false
        })
      }
    )
  }
}

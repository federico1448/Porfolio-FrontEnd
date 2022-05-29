import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';
import { SkillService } from 'src/app/services/common/skill.service';
import { AuthService } from 'src/app/services/common/auth.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPlus,faCircle} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skills:Skill[] =[];  
  title:string ="Hard & Soft Skills"
  loginstatus:boolean=false;
  faPlus=faPlus;
  faCircle=faCircle;
  nameexist:boolean=false;

  constructor(
    private skillService:SkillService,
    private autenticadionService:AuthService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.autenticadionService.logintest().subscribe( login=>{ 
      this.loginstatus=login})

    this.skillService.getAllSkill().subscribe(
      result =>{
        this.skills=result;
      }
    )

    this.skillService.currentSkill().subscribe(
      result =>{
        console.log("respuesta en la raiz")
        for (var i = 0; i < this.skills.length; i++){
          if(this.skills[i].id===result.id){
            this.skills[i]=result;
            this.nameexist=true
            break;
          }
        }
        if(!this.nameexist){
          this.skillService.getAllSkill().subscribe(
            result =>{
              console.log("login en la recarga: "+ this.loginstatus)
              this.skills=result;
            }
          )
        }
      }
    )
  }

  openModal(content:any) {
    this.modalService.open(content);
  }

  deleteSkill(skillItem:Skill){
    this.skillService.deleteSkill(skillItem).subscribe(
      result=>{
        [
          this.skills =this.skills.filter( (t)=> t.id != skillItem.id)   
        ]
        Swal.fire({
          title:'',
          text:'El Skill '+ result.name+' fue eliminado',
          timer: 3000,
          icon: 'success',
          showConfirmButton: false
        })
      }
    )
  }
}

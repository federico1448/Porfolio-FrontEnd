import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Skill } from 'src/app/interfaces/skill';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  baseURL:string="http://frozen-reaches-65007.herokuapp.com/skill";
  private skillstatus:Subject<Skill>=new Subject<Skill>();

  constructor(
    private http: HttpClient
  ) { }


  getAllSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.baseURL+"/getall");
  }

  createSkill(formulario: FormGroup){
    const formData = new FormData();
    formData.append("name", formulario.value.name);
    formData.append("porcent", formulario.value.porcent);
    this.http.post<Skill>(this.baseURL+"/create2",formData
    ).subscribe(resp=>{
      this.skillstatus.next(resp);
      Swal.fire({
        title:'',
        text:'El Skill '+ resp.name+' se cargo correctamente',
        timer: 3000,
        icon: 'success',
        showConfirmButton: false
      })
    });
  }

  updateSkill(formulario: FormGroup,idvalue:number){
    const formData = new FormData();
    formData.append("name", formulario.value.name);
    formData.append("porcent", formulario.value.porcent);
    this.http.post<Skill>(this.baseURL+"/edit/"+idvalue,formData)
      .subscribe(resp=>{
        this.skillstatus.next(resp);
        Swal.fire({
          title:'',
          text:'El Skill '+ resp.name+' se actualizo correctamente',
          timer: 3000,
          icon: 'success',
          showConfirmButton: false
        })
      });
  }

  currentSkill():Observable<Skill>{
    return this.skillstatus.asObservable();
  }

  deleteSkill(skill:Skill):Observable<Skill>{
    return this.http.delete<Skill>(this.baseURL+"/delete/"+skill.id);
  }
}

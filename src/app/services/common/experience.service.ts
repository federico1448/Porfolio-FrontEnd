import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Experience } from 'src/app/interfaces/expercience';
import { Education } from 'src/app/interfaces/education';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  baseURL:string="http://frozen-reaches-65007.herokuapp.com/experience";
  private experience:Subject<Experience>=new Subject<Experience>();

  constructor(
    private http: HttpClient
  ) { }

  getAllExperience():Observable<Experience[]>{
    return this.http.get<Experience[]>(this.baseURL+"/getall");
  }


  getExperience(idvalue:number):Observable<Experience>{
    return this.http.get<Experience>(this.baseURL+"/get/"+idvalue);
  }

  currentExperience():Observable<Experience>{
    return this.experience.asObservable();
  }

  createExperience(formulario: FormGroup,file:File){
    const formData = new FormData();
    formData.append("name", formulario.value.name);
    formData.append("period", formulario.value.period);
    formData.append("puesto", formulario.value.puesto);
    formData.append("desciption", formulario.value.desciption);
    formData.append('file', file);
    this.http.post<Experience>(this.baseURL+"/create2",formData
    ).subscribe(resp=>{
      console.log(resp)
      this.experience.next(resp);
      Swal.fire({
        title:'',
        text:'La experiencia laboral '+ resp.name+' se cargo correctamente',
        timer: 3000,
        icon: 'success',
        showConfirmButton: false
      })
    });
  }

  updateExperience(formulario: FormGroup,idvalue:number){
    const formData = new FormData();
    formData.append("name", formulario.value.name);
    formData.append("period", formulario.value.period);
    formData.append("puesto", formulario.value.puesto);
    formData.append("desciption", formulario.value.desciption);
    this.http.post<Experience>(this.baseURL+"/edit/"+idvalue,formData
    ).subscribe(resp=>{
      this.experience.next(resp);
      Swal.fire({
        title:'',
        text:'La experiencia laboral '+ resp.name+' se actualizo correctamente',
        timer: 3000,
        icon: 'success',
        showConfirmButton: false
      })
    });
  }

  deleteExperience(educacion:Experience):Observable<Education>{
    return this.http.delete<Education>(this.baseURL+"/delete/"+educacion.id);
  }
}

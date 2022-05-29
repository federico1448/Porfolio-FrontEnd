import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Education } from 'src/app/interfaces/education';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  baseURL:string="http://localhost:8099/education";
  private education:Subject<Education>=new Subject<Education>();
  deleteResponde:string="";

  constructor(
    private http: HttpClient
  ) { }

  getAllEducation():Observable<Education[]>{
    return this.http.get<Education[]>(this.baseURL+"/getall");
  }

  getEducation(idvalue:number){
    return this.http.get<Education>(this.baseURL+"/get/"+idvalue);
  }

  createEducation(formulario: FormGroup,file:File){
    const formData = new FormData();
    formData.append("name", formulario.value.name);
    formData.append("site", formulario.value.site);
    formData.append("year", formulario.value.year);
    formData.append('file', file);
    this.http.post<Education>(this.baseURL+"/create2",formData
    ).subscribe(resp=>{
      Swal.fire({
        title:'',
        text:'El Titulo '+ resp.name+' se cargo correctamente',
        timer: 3000,
        icon: 'success',
        showConfirmButton: false
      })
      this.education.next(resp);
    });
  }

  updateEducation(formulario: FormGroup,idvalue:number){
    const formData = new FormData();
    formData.append("name", formulario.value.name);
    formData.append("year", formulario.value.year);
    formData.append("site", formulario.value.site);
    this.http.post<Education>(this.baseURL+"/edit/"+idvalue,formData
    ).subscribe(resp=>{
      this.education.next(resp);
      Swal.fire({
        title:'',
        text:'El Titulo '+ resp.name+' se actualizo correctamente',
        timer: 3000,
        icon: 'success',
        showConfirmButton: false
      })
    });
  }

  currentEducation():Observable<Education>{
    return this.education.asObservable();
  }

  deleteEducation(educacion:Education):Observable<Education>{
    return this.http.delete<Education>(this.baseURL+"/delete/"+educacion.id);
  }
}

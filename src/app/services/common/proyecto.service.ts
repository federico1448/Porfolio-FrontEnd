import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Proyects } from 'src/app/interfaces/proyect'; 
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  baseURL:string="http://frozen-reaches-65007.herokuapp.com/proyect";
  private proyect:Subject<Proyects>=new Subject<Proyects>();
  constructor(
    private http: HttpClient
  ) { }

  getAllProyects():Observable<Proyects[]>{
    return this.http.get<Proyects[]>(this.baseURL+"/getall");
  }

  editProyect(formulario:FormGroup ,idvalue:number){
    const formData = new FormData();
    formData.append("name", formulario.value.name);
    formData.append("date", formulario.value.date);
    formData.append("decription", formulario.value.decription);
    formData.append("evidence", formulario.value.evidence);
    this.http.post<Proyects>(this.baseURL+"/edit/"+idvalue,formData
    ).subscribe(resp=>{
      this.proyect.next(resp);
      Swal.fire({
        title:'',
        text:'El Proyecto '+ resp.name+' se actualizo correctamente',
        timer: 3000,
        icon: 'success',
        showConfirmButton: false
      })
    });
  }

  createProyect(formulario: FormGroup){
    const formData = new FormData();
    formData.append("name", formulario.value.name);
    formData.append("date", formulario.value.date);
    formData.append("decription", formulario.value.decription);
    formData.append('evidence', formulario.value.evidence);
    this.http.post<Proyects>(this.baseURL+"/create2",formData
    ).subscribe(resp=>{
      this.proyect.next(resp);
      Swal.fire({
        title:'',
        text:'El Proyecto '+ resp.name+' se cargo correctamente',
        timer: 3000,
        icon: 'success',
        showConfirmButton: false
      })
    });
  }

  currentProyect():Observable<Proyects>{
    return this.proyect.asObservable();
  }

  deleteProyect(proyect:Proyects):Observable<Proyects>{
    return this.http.delete<Proyects>(this.baseURL+"/delete/"+proyect.id);
  }
}

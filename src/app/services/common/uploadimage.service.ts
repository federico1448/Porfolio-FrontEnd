import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent ,HttpHeaders} from '@angular/common/http';
import { Image } from 'src/app/interfaces/image';
import { Experience } from 'src/app/interfaces/expercience';

@Injectable({
  providedIn: 'root'
})
export class UploadimageService {
  private subject= new Subject<string>();
  private experice:Subject<Experience>=new Subject<Experience>();
  baseURL:string="http://localhost:8099/";
  image:any;
  

  constructor(
    private http: HttpClient
  ) { }


  upload(file: File, entidad:string, idvalue:number): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('name', "imgDeEjeplo");
    console.log("llego al upload serivio")
    if(entidad=="education"){
      const req = new HttpRequest('POST', this.baseURL+"education/editlogo/"+idvalue, formData,
      {
        reportProgress: true,
        responseType: 'json'
      });
      return this.http.request(req);
    }
    else if(entidad=="fotoperfil"){
      const req = new HttpRequest('POST', this.baseURL+"ppresentation/editlogo/"+idvalue, formData,
      {
        reportProgress: true,
        responseType: 'json'
      });
      return this.http.request(req);
    }
    else if(entidad=="experience"){
      const req = new HttpRequest('POST', this.baseURL+"experience/editlog/"+idvalue, formData,
        {
        reportProgress: true,
        responseType: 'json'
      }
      );
    return this.http.request(req);
    }
    else{
      const req = new HttpRequest('POST', this.baseURL+"image/image", formData,
      {
        reportProgress: true,
        responseType: 'json'
      }
      );
      return this.http.request(req);
    }
  }

  uploadFile(file:File){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json');
    const formData = new FormData();
    console.log(file)
    formData.append('image',file);
    formData.append('name',file.name);
    formData.append('imagetype','icono')
    console.log(formData)
    this.http.post(this.baseURL+"/create",formData,{ 'headers': headers }).subscribe(response =>{
      console.log(response)
    })
  }

  getFileFirst(idvalue:number): Observable<Image> {
    return this.http.get<Image>(this.baseURL +"image/get/"+idvalue);
  }

}

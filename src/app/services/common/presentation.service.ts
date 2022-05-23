import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent ,HttpHeaders} from '@angular/common/http';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  baseURL:string="http://localhost:8099/ppresentation";

  constructor(
    private http: HttpClient
  ) { }

  getPresentation():Observable<User>{
    return this.http.get<User>(this.baseURL+"/getfirt");
  }

  editPresentation(formData: User, id:number):Observable<User>{
    return this.http.put<User>(this.baseURL+"/editar/"+id, formData);
  }

}

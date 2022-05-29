import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent ,HttpHeaders} from '@angular/common/http';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  baseURL:string="http://frozen-reaches-65007.herokuapp.com/ppresentation";
  private userPresentation: Subject<User> = new Subject<User>();
  constructor(
    private http: HttpClient
  ) { }


  getPresentation():Observable<User>{
    return this.http.get<User>(this.baseURL+"/getfirt");
  }

  //editPresentation(formData: User,idvalue:number):Observable<User>{
  editPresentation(name:string, description:string, titulos:string,idvalue:number){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json');
    const valor='{"name":"'+name.toString()+'","description":"'+description+'","titulos":['+titulos+']}';
    const  resp=this.http.post<User>(this.baseURL+"/editar/"+idvalue,valor
    ,{ 'headers': headers }).subscribe(resp=>{
        this.userPresentation.next(resp);
    });
  }

  userPresentationCurrent():Observable<User>{
    return this.userPresentation.asObservable();
  }



}

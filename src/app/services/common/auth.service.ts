import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseURL:string="http://frozen-reaches-65007.herokuapp.com/personas";
  private loginstatusvalue: Subject<boolean> = new Subject<boolean>();
  private loginissue: Subject<boolean> = new Subject<boolean>();
   
  constructor(private http: HttpClient) { }


  loginstatus(formData: FormData):Observable<boolean>{
    return this.http.post<boolean>(this.baseURL+"/login", formData)
    .pipe(
        map(data => {
          this.loginstatusvalue.next(data);
          this.loginissue.next(data);
          return data;
      }))
  }

  logintest():Observable<boolean>{
    return this.loginstatusvalue.asObservable();
  }
  
  loginIssue():Observable<boolean>{
    return this.loginissue.asObservable();
  }

  logut(){
    console.log("llego al logout")
    this.loginstatusvalue.next(false);
  }
}

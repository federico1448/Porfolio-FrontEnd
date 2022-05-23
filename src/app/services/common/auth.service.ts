import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private subject= new Subject<any>();
  baseURL:string="http://localhost:8099/personas";
  private loginstatusvalue: Subject<boolean> = new Subject<boolean>();
  private loginissue: Subject<boolean> = new Subject<boolean>();
   
  constructor(private http: HttpClient) { }


  loginstatus(formData: FormData):Observable<boolean>{
    return this.http.post<boolean>("http://localhost:8099/personas/login", formData)
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

//  login(formData: FormData):Observable<HttpEvent<string>>{
//    const req = new HttpRequest('POST', "http://localhost:8099/personas/login", formData);
//    return this.http.request(req);
//  }

//  login2(formData: FormData): Observable<any> {
//    return this.http.post("http://localhost:8099/personas/login", formData);
//  }
 
  upload(file: File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('name', "imgDeEjeplo");
    const req = new HttpRequest('POST', "http://localhost:8099/personas/image", formData,
     {
      reportProgress: true,
      responseType: 'json'
    }
    );
    return this.http.request(req);
  }

//  getFiles(): Observable<any> {
//    return this.http.get(`${this.baseURL}/files`);
//  }
}

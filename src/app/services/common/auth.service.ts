import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private subject= new Subject<any>();

  constructor() { }


  login(password:string):Observable<any>{
    console.log("login success");
    return this.subject.asObservable();
  }
}

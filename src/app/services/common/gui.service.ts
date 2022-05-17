import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuiService {

  constructor() { }


  blockButton(id:string){
    const element=document.getElementById(id);
    if(element!=null)
      element.style.display = 'none';
  }

  showButton(id:string){
    const element=document.getElementById(id);
    if(element!=null)
      element.style.display = 'block';
  }
}

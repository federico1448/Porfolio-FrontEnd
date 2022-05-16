import { Injectable } from '@angular/core'; 
import { Observable ,Subject} from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  titularAlerta: string="";
  private modals: any[] = [];
  private showModalView:boolean=false;
  private subject=new Subject<any>();

  constructor() { }

  toogleShowModalView():void{
    this.showModalView = !this.showModalView;
    this.subject.next(this.showModalView);
  }

  add(modal: any) {
      // add modal to array of active modals
      this.modals.push(modal);
  }

  remove(id: string) {
      // remove modal from array of active modals
      this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {    
      const modal = this.modals.find(x => x.id === id);
      modal.open();
  }

  close(id: string) {
      // close modal specified by id
      const modal = this.modals.find(x => x.id === id);
      modal.close();
  }
}

import {  Component, ElementRef, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/common/modal.service';
//import { AuthService} from '../../../services/common/auth.service'; 


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})

export class ModalComponent implements OnInit {
  @Input() id: string="";
  @Input() text: string="";
  @Input() password: string="";
  @Output() showModal: EventEmitter<string> = new EventEmitter()
  private element: any;

  constructor(
      private modalService: ModalService, 
      private el: ElementRef
    //  private authService: AuthService
      ) {  
        this.element = el.nativeElement;
      }

   ngOnInit(): void {
    if (!this.id) {
        console.error('modal must have an id');
        return;
    }
    document.body.appendChild(this.element);
    this.close();
    this.modalService.add(this);
  }

  // open modal
  open(): void {
      this.showModal.emit(this.id);
      const modalp=document.getElementById(this.id);
      if(modalp != null){
        modalp.style.display = 'block';
      }
      document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('jw-modal-open');
  }
}

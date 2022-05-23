import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalLoginComponent implements OnInit {
  @Input() textbtn: string="";
  @Input() colorbtn: string= "";
  closeResult?: string;
  title:string="Login";
  profileForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openFullscreen(content:any) {
    this.modalService.open(content, { fullscreen: true });
  }

  login(name:string,pass:string){
    console.log("llego!! "+ name+" "+pass);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}

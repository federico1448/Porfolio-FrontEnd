import { Component, OnInit , Input, Output,EventEmitter} from '@angular/core';
import { Proyects } from 'src/app/interfaces/proyect';
import { faPen ,faTimes,faCircle} from '@fortawesome/free-solid-svg-icons';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent implements OnInit {
  @Input() proyItem:any;
  @Input() loginstatuscurrent?:boolean;
  faPen= faPen;
  faTimes=faTimes;
  faCircle=faCircle;
  loginstatus:boolean=false;
  evideceValue:any;
  @Output() proyectDeleted: EventEmitter<Proyects>= new EventEmitter();


  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.evideceValue=this.proyItem.evidence
  }
  
  openModal(content:any) {
    this.modalService.open(content);
  }

  deleteProyect(proyect:Proyects){
    this.proyectDeleted.emit(proyect);
  }
}

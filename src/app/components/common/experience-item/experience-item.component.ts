import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { Experience } from 'src/app/interfaces/expercience';
import { Experiencia } from 'src/app/mocks/mockExperiencia';
import { faPen ,faTimes,faCircle} from '@fortawesome/free-solid-svg-icons';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input() expItem:Experience=Experiencia[0];
  @Input() loginstatuscurrent?:boolean;
  imageLogo:any
  faPen= faPen;
  faTimes=faTimes;
  faCircle=faCircle;
  @Input() experience:any;
  registerForm = this.formBuilder.group({
    name: ['', {
    }],
    site: ['', {
      }],
    year: ['', {
      }],
  });
  experiencevalue:string="experience"
  @Output() experienceItem:EventEmitter<Experience>= new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.imageLogo = 'data:image/jpeg;base64,' + this.expItem.logo;
  }

  openModal(content:any) {
    this.modalService.open(content);
  }

  deleteExperience(experience:Experience){
    this.experienceItem.emit(experience);
  }
}

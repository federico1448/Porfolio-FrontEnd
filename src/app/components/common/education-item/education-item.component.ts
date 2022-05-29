import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';
import { Education } from 'src/app/interfaces/education';
import { AuthService } from 'src/app/services/common/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPen ,faTimes,faCircle} from '@fortawesome/free-solid-svg-icons';
import { EducationService } from 'src/app/services/common/education.service';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})

export class EducationItemComponent implements OnInit {
  @Input() educacionvalue:any;
  @Input() loginstatuscurrent?:boolean;
  educationLogo:any
  @Output() educacionDeleted: EventEmitter<Education>= new EventEmitter();
  faPen= faPen;
  faTimes=faTimes;
  faCircle=faCircle;
  education="education"

  constructor(
    private autenticadionService:AuthService,
    private modalService: NgbModal,
    private educationService:EducationService
  ) { }

  ngOnInit(): void {
    this.educationLogo = 'data:image/jpeg;base64,' + this.educacionvalue.logo;
  }

  openModal(content:any) {
    this.modalService.open(content);
  }

  deleteEducation(educacion:Education) {
    this.educacionDeleted.emit(educacion);
  }
}

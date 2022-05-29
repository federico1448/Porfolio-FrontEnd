import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';
import { AuthService } from 'src/app/services/common/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPen ,faTimes,faCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})

export class SkillItemComponent implements OnInit {
  @Input() skillvalue:any;
  @Input() loginstatuscurrent?:boolean;
  faPen= faPen;
  faTimes=faTimes;
  faCircle=faCircle;
  skill="skill"
  @Output() skillDeleted: EventEmitter<Skill>=new EventEmitter();

  constructor(
    private autenticadionService:AuthService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openModal(content:any) {
    this.modalService.open(content);
  }

  deleteSkill(skill:Skill) {
    this.skillDeleted.emit(skill);
  }

}
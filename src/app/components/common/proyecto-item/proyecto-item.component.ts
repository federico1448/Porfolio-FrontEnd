import { Component, OnInit , Input} from '@angular/core';
import { Proyects } from 'src/app/interfaces/proyect';
import { PROYECT } from 'src/app/mocks/mockProyecto';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent implements OnInit {
  @Input() proyItem:Proyects=PROYECT[0];
  constructor() { }

  ngOnInit(): void {
  }

}

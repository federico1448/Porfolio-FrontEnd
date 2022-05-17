import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  imagenes:any[]=[
    {
      name:"#YoProgramo",
      img:"assets/azul1.jpg",
      desc:"Argentina Programa"
    },
    {
      name:"#YoProgramo",
      img:"assets/azul2.png",
      desc:"Argentina Programa"
    }
  ]

  constructor(
    carruselConfing: NgbCarouselConfig
  ) { }

  ngOnInit(): void {
  }

}

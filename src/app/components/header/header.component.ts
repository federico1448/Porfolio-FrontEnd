import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() backgroundImage!: string;
  @Input() heading!: string;
  @Input() subHeading!: string;
  @Input() meta!: string;
  @Input() siteHeading = false;

  safeBackgroudImage!: SafeStyle;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeBackgroudImage = this.domSanitizer.bypassSecurityTrustStyle(this.backgroundImage);
  }

}

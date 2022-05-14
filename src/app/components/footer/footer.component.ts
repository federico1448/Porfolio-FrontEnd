import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { faTwitter,faFacebookF,faGithub } from '@fortawesome/free-brands-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebook=faFacebookF;
  faGithub=faGithub;
  faCircle=faCircle;

  constructor() {}

  ngOnInit(): void {}

}

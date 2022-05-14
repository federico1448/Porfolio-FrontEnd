import { Component, OnInit,OnDestroy, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
//import { AuthUtilsService } from '@modules/auth/services';
//import { NavigationService } from '@modules/navigation/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription = new Subscription();
  isLoggedIn = false;
  isOnPost = false;
  isMenuCollapsed = false;
  faGithub=faGithub;
  faBars=faBars;

  constructor(
    //private navigationService: NavigationService,
    //private authUtilsService: AuthUtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
//    this.subscription.add(
//      this.navigationService.currentComponent$().subscribe(currentComponentName => {
//          this.isOnPost = currentComponentName === 'PostComponent';
//      })
//  );
//  this.subscription.add(
//      this.authUtilsService.isLoggedIn$().subscribe(isLoggedIn => {
//          this.isLoggedIn = isLoggedIn;
//      })
//  );

 // this.authUtilsService.checkToken();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

editPost() {
//    this.router.navigateByUrl(`/edit/${this.route.snapshot.params.post}`);
}
}

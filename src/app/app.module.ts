import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './components/common/button/button.component';
import { ModalModule} from '../app/modules/modal/modal.module';
import { BannerComponent } from './components/common/banner/banner.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillItemComponent } from './components/common/skill-item/skill-item.component';
import { SkillComponent } from './components/skill/skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EducationComponent } from './components/education/education.component';
import { EducationItemComponent } from './components/common/education-item/education-item.component';
import { ProyectoItemComponent } from './components/common/proyecto-item/proyecto-item.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { ExperienceItemComponent } from './components/common/experience-item/experience-item.component';
import { ModalLoginComponent } from './components/common/modal-login/modal-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AcordionLoginComponent } from './components/common/acordion-login/acordion-login.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './components/common/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    BannerComponent,
    PresentationComponent,
    ExperienceComponent,
    SkillItemComponent,
    SkillComponent,
    EducationComponent,
    EducationItemComponent,
    ProyectoItemComponent,
    ProyectComponent,
    ExperienceItemComponent,
    ModalLoginComponent,
    AcordionLoginComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      backgroundColor: "teal",
      backgroundPadding: 8,
      radius: 60,
      space: -15,
      maxPercent: 100,
      unitsColor: "#ffffff",
      outerStrokeWidth: 7.5,
      outerStrokeColor: "white",
      innerStrokeColor: "teal",
      innerStrokeWidth: 3,
      titleColor: "#ffffff",
      subtitleColor: "#ffffff"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCompleteItemComponent } from './education-complete-item.component';

describe('EducationCompleteItemComponent', () => {
  let component: EducationCompleteItemComponent;
  let fixture: ComponentFixture<EducationCompleteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationCompleteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCompleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

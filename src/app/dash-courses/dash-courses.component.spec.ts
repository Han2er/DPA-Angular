import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCoursesComponent } from './dash-courses.component';

describe('DashCoursesComponent', () => {
  let component: DashCoursesComponent;
  let fixture: ComponentFixture<DashCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashCoursesComponent]
    });
    fixture = TestBed.createComponent(DashCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpJobsComponent } from './view-emp-jobs.component';

describe('ViewEmpJobsComponent', () => {
  let component: ViewEmpJobsComponent;
  let fixture: ComponentFixture<ViewEmpJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

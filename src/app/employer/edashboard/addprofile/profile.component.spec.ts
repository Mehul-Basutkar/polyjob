import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: AddprofileComponent;
  let fixture: ComponentFixture<AddprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

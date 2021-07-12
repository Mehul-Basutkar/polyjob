import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SregiComponent } from './sregi.component';

describe('SregiComponent', () => {
  let component: SregiComponent;
  let fixture: ComponentFixture<SregiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SregiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SregiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

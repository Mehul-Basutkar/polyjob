import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EregiComponent } from './eregi.component';

describe('EregiComponent', () => {
  let component: EregiComponent;
  let fixture: ComponentFixture<EregiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EregiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EregiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

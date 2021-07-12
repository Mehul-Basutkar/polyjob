import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddEventsComponent } from './view-add-events.component';

describe('ViewAddEventsComponent', () => {
  let component: ViewAddEventsComponent;
  let fixture: ComponentFixture<ViewAddEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

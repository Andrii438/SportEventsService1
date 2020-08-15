import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestEventsComponent } from './rest-events.component';

describe('RestEventsComponent', () => {
  let component: RestEventsComponent;
  let fixture: ComponentFixture<RestEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

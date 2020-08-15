import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEventsComponent } from './person-events.component';

describe('PersonEventsComponent', () => {
  let component: PersonEventsComponent;
  let fixture: ComponentFixture<PersonEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

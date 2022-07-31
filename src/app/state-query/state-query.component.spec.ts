import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateInfo, StateQueryComponent } from './state-query.component';

describe('StateQueryComponent', () => {
  let component: StateQueryComponent;
  let fixture: ComponentFixture<StateQueryComponent>; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCoinsComponent } from './selected-coins.component';

describe('SelectedCoinsComponent', () => {
  let component: SelectedCoinsComponent;
  let fixture: ComponentFixture<SelectedCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

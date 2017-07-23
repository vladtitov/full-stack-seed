import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSelectedCoinsComponent } from './email-selected-coins.component';

describe('EmailSelectedCoinsComponent', () => {
  let component: EmailSelectedCoinsComponent;
  let fixture: ComponentFixture<EmailSelectedCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSelectedCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSelectedCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

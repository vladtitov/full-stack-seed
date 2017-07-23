import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAllCoinsComponent } from './email-all-coins.component';

describe('EmailAllCoinsComponent', () => {
  let component: EmailAllCoinsComponent;
  let fixture: ComponentFixture<EmailAllCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailAllCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAllCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSsComponent } from './exchange-ss.component';

describe('ExchangeSsComponent', () => {
  let component: ExchangeSsComponent;
  let fixture: ComponentFixture<ExchangeSsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeSsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

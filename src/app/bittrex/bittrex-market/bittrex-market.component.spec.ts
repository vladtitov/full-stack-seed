import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexMarketComponent } from './bittrex-market.component';

describe('BittrexMarketComponent', () => {
  let component: BittrexMarketComponent;
  let fixture: ComponentFixture<BittrexMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

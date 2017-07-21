import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChMarketComponent } from './ch-market.component';

describe('ChMarketComponent', () => {
  let component: ChMarketComponent;
  let fixture: ComponentFixture<ChMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

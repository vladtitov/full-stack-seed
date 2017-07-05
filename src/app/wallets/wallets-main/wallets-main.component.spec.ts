import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsMainComponent } from './wallets-main.component';

describe('WalletsMainComponent', () => {
  let component: WalletsMainComponent;
  let fixture: ComponentFixture<WalletsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

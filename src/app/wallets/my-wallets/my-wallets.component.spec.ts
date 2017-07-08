import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWalletsComponent } from './my-wallets.component';

describe('MyWalletsComponent', () => {
  let component: MyWalletsComponent;
  let fixture: ComponentFixture<MyWalletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWalletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

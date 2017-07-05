import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaletsAllComponent } from './walets-all.component';

describe('WaletsAllComponent', () => {
  let component: WaletsAllComponent;
  let fixture: ComponentFixture<WaletsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaletsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaletsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

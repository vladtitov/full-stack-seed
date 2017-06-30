import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoinsTableComponent } from './all-coins-table.component';

describe('AllCoinsTableComponent', () => {
  let component: AllCoinsTableComponent;
  let fixture: ComponentFixture<AllCoinsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCoinsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCoinsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunWatchdogsComponent } from './run-watchdogs.component';

describe('RunWatchdogsComponent', () => {
  let component: RunWatchdogsComponent;
  let fixture: ComponentFixture<RunWatchdogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunWatchdogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunWatchdogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

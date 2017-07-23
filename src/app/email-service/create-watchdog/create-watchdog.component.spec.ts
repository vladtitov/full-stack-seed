import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWatchdogComponent } from './create-watchdog.component';

describe('CreateWatchdogComponent', () => {
  let component: CreateWatchdogComponent;
  let fixture: ComponentFixture<CreateWatchdogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWatchdogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWatchdogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

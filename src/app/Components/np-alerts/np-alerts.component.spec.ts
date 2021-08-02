import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpAlertsComponent } from './np-alerts.component';

describe('NpAlertsComponent', () => {
  let component: NpAlertsComponent;
  let fixture: ComponentFixture<NpAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

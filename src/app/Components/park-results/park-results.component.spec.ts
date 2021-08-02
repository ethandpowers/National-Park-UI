import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkResultsComponent } from './park-results.component';

describe('ParkResultsComponent', () => {
  let component: ParkResultsComponent;
  let fixture: ComponentFixture<ParkResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

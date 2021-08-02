import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpWeatherComponent } from './np-weather.component';

describe('NpWeatherComponent', () => {
  let component: NpWeatherComponent;
  let fixture: ComponentFixture<NpWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

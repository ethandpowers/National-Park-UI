import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesResultsComponent } from './species-results.component';

describe('SpeciesResultsComponent', () => {
  let component: SpeciesResultsComponent;
  let fixture: ComponentFixture<SpeciesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

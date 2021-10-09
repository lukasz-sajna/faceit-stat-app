import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastResultsCardComponent } from './last-results-card.component';

describe('LastResultsCardComponent', () => {
  let component: LastResultsCardComponent;
  let fixture: ComponentFixture<LastResultsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastResultsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastResultsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

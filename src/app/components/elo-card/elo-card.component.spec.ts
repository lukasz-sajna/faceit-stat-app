import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloCardComponent } from './elo-card.component';

describe('EloCardComponent', () => {
  let component: EloCardComponent;
  let fixture: ComponentFixture<EloCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EloCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

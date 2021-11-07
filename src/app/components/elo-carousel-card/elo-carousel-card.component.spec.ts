import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloCarouselCardComponent } from './elo-carousel-card.component';

describe('EloCarouselCardComponent', () => {
  let component: EloCarouselCardComponent;
  let fixture: ComponentFixture<EloCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloCarouselCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EloCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

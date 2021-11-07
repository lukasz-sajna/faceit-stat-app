import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloCarouselComponent } from './elo-carousel.component';

describe('EloCarouselComponent', () => {
  let component: EloCarouselComponent;
  let fixture: ComponentFixture<EloCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EloCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

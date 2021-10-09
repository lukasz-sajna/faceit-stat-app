import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloDiffCardComponent } from './elo-diff-card.component';

describe('EloDiffCardComponent', () => {
  let component: EloDiffCardComponent;
  let fixture: ComponentFixture<EloDiffCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloDiffCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EloDiffCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

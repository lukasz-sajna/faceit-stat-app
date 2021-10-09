import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloDiffComponent } from './elo-diff.component';

describe('EloDiffComponent', () => {
  let component: EloDiffComponent;
  let fixture: ComponentFixture<EloDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloDiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EloDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

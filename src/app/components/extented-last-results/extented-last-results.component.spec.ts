import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtentedLastResultsComponent } from './extented-last-results.component';

describe('ExtentedLastResultsComponent', () => {
  let component: ExtentedLastResultsComponent;
  let fixture: ComponentFixture<ExtentedLastResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtentedLastResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtentedLastResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDashboardComponent } from './toggle-dashboard.component';

describe('ToggleDashboardComponent', () => {
  let component: ToggleDashboardComponent;
  let fixture: ComponentFixture<ToggleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

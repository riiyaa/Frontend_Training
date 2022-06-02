import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleReportComponent } from './toggle-report.component';

describe('ToggleReportComponent', () => {
  let component: ToggleReportComponent;
  let fixture: ComponentFixture<ToggleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

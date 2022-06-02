import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSheetComponent } from './extra-sheet.component';

describe('ExtraSheetComponent', () => {
  let component: ExtraSheetComponent;
  let fixture: ComponentFixture<ExtraSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

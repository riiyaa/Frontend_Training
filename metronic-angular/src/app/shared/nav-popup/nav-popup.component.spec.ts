import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPopupComponent } from './nav-popup.component';

describe('NavPopupComponent', () => {
  let component: NavPopupComponent;
  let fixture: ComponentFixture<NavPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

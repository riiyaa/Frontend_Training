import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperChildComponent } from './super-child.component';

describe('SuperChildComponent', () => {
  let component: SuperChildComponent;
  let fixture: ComponentFixture<SuperChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

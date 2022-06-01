import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvChildComponent } from './tv-child.component';

describe('TvChildComponent', () => {
  let component: TvChildComponent;
  let fixture: ComponentFixture<TvChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

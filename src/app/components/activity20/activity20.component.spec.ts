import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity20Component } from './activity20.component';

describe('Activity20Component', () => {
  let component: Activity20Component;
  let fixture: ComponentFixture<Activity20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activity20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Activity20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity21Component } from './activity21.component';

describe('Activity21Component', () => {
  let component: Activity21Component;
  let fixture: ComponentFixture<Activity21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activity21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Activity21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

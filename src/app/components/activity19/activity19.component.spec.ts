import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity19Component } from './activity19.component';

describe('Activity19Component', () => {
  let component: Activity19Component;
  let fixture: ComponentFixture<Activity19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activity19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Activity19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

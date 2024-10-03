import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity22Component } from './activity22.component';

describe('Activity22Component', () => {
  let component: Activity22Component;
  let fixture: ComponentFixture<Activity22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activity22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Activity22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

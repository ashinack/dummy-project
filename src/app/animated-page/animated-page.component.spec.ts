import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedPageComponent } from './animated-page.component';

describe('AnimatedPageComponent', () => {
  let component: AnimatedPageComponent;
  let fixture: ComponentFixture<AnimatedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedPageComponent]
    });
    fixture = TestBed.createComponent(AnimatedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

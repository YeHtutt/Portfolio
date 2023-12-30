import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaBubbleComponent } from './da-bubble.component';

describe('DaBubbleComponent', () => {
  let component: DaBubbleComponent;
  let fixture: ComponentFixture<DaBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaBubbleComponent]
    });
    fixture = TestBed.createComponent(DaBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

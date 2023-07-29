import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolloLocoComponent } from './pollo-loco.component';

describe('PolloLocoComponent', () => {
  let component: PolloLocoComponent;
  let fixture: ComponentFixture<PolloLocoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolloLocoComponent]
    });
    fixture = TestBed.createComponent(PolloLocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

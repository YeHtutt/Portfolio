import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeadComponent } from './portfolio-head.component';

describe('PortfolioHeadComponent', () => {
  let component: PortfolioHeadComponent;
  let fixture: ComponentFixture<PortfolioHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioHeadComponent]
    });
    fixture = TestBed.createComponent(PortfolioHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

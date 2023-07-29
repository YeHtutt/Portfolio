import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubEmailButtonsComponent } from './github-email-buttons.component';

describe('GithubEmailButtonsComponent', () => {
  let component: GithubEmailButtonsComponent;
  let fixture: ComponentFixture<GithubEmailButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubEmailButtonsComponent]
    });
    fixture = TestBed.createComponent(GithubEmailButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

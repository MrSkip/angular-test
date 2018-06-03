import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarUserProfileComponent } from './bar-user-profile.component';

describe('BarUserProfileComponent', () => {
  let component: BarUserProfileComponent;
  let fixture: ComponentFixture<BarUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DirectorsHomeComponent } from './directors-home.component';

describe('DirectorsHomeComponent', () => {
  let component: DirectorsHomeComponent;
  let fixture: ComponentFixture<DirectorsHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

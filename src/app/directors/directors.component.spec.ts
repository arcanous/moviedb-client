import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DirectorsComponent } from './directors.component';

describe('DirectorsComponent', () => {
  let component: DirectorsComponent;
  let fixture: ComponentFixture<DirectorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

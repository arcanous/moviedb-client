import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DirectorsDetailsComponent } from './directors-details.component';

describe('DirectorsDetailsComponent', () => {
  let component: DirectorsDetailsComponent;
  let fixture: ComponentFixture<DirectorsDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

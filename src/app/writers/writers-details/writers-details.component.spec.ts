import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WritersDetailsComponent } from './writers-details.component';

describe('WritersDetailsComponent', () => {
  let component: WritersDetailsComponent;
  let fixture: ComponentFixture<WritersDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WritersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

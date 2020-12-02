import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WritersHomeComponent } from './writers-home.component';

describe('WritersHomeComponent', () => {
  let component: WritersHomeComponent;
  let fixture: ComponentFixture<WritersHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WritersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

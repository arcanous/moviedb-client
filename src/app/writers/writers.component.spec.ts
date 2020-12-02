import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WritersComponent } from './writers.component';

describe('WritersComponent', () => {
  let component: WritersComponent;
  let fixture: ComponentFixture<WritersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WritersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

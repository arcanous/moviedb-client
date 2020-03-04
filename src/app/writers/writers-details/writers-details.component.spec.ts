import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritersDetailsComponent } from './writers-details.component';

describe('WritersDetailsComponent', () => {
  let component: WritersDetailsComponent;
  let fixture: ComponentFixture<WritersDetailsComponent>;

  beforeEach(async(() => {
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

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActorsDetailsComponent } from './actors-details.component';

describe('ActorsDetailsComponent', () => {
  let component: ActorsDetailsComponent;
  let fixture: ComponentFixture<ActorsDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

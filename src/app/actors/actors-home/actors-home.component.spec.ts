import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActorsHomeComponent } from './actors-home.component';

describe('ActorsHomeComponent', () => {
  let component: ActorsHomeComponent;
  let fixture: ComponentFixture<ActorsHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

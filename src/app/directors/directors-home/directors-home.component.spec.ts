import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsHomeComponent } from './directors-home.component';

describe('DirectorsHomeComponent', () => {
  let component: DirectorsHomeComponent;
  let fixture: ComponentFixture<DirectorsHomeComponent>;

  beforeEach(async(() => {
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

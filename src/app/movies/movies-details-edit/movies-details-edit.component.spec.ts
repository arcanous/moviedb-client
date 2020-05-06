import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDetailsEditComponent } from './movies-details-edit.component';

describe('MoviesDetailsEditComponent', () => {
  let component: MoviesDetailsEditComponent;
  let fixture: ComponentFixture<MoviesDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { instance, mock } from 'ts-mockito';
import { Store } from '@ngxs/store';
import { MoviesService } from '@/app/core/movies/movies.service';

import { MoviesDetailsComponent } from './movies-details.component';

const StoreMock = mock(Store);
const MoviesServiceMock = mock(MoviesService);

describe('MoviesDetailsComponent', () => {
  let component: MoviesDetailsComponent;
  let fixture: ComponentFixture<MoviesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesDetailsComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: Store, useValue: instance(StoreMock) },
        { provide: MoviesService, useValue: instance(MoviesServiceMock) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log('before each 2');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    console.log(component);
  });
});

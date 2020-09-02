import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActorsService } from '@/app/core/actors/actors.service';
import { DirectorsService } from '@/app/core/directors/directors.service';
import { WritersService } from '@/app/core/writers/writers.service';
import { RouterTestingModule } from '@angular/router/testing';
import { instance, mock, anyOfClass, verify, capture, reset } from 'ts-mockito';
import { Store } from '@ngxs/store';
import { MoviesService } from '@/app/core/movies/movies.service';
import { MoviesDetailsEditComponent } from './movies-details-edit.component';
import { SetUnsavedChanges } from '@/app/app.actions';

const StoreMock = mock(Store);
const MoviesServiceMock = mock(MoviesService);
const ActorsServiceMock = mock(ActorsService);
const DirectorsServiceMock = mock(DirectorsService);
const WritersServiceMock = mock(WritersService);


describe('MoviesDetailsEditComponent', () => {
  let component: MoviesDetailsEditComponent;
  let fixture: ComponentFixture<MoviesDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesDetailsEditComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: Store, useValue: instance(StoreMock) },
        { provide: MoviesService, useValue: instance(MoviesServiceMock) },
        { provide: ActorsService, useValue: instance(ActorsServiceMock) },
        { provide: DirectorsService, useValue: instance(DirectorsServiceMock) },
        { provide: WritersService, useValue: instance(WritersServiceMock) },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    reset(StoreMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly return cantBeSaved', () => {
    component.movie = {
      id: null,
      name: 'abc',
      year: 444,
      plot: 'qwery',
      actors: ['a', 'b', 'c'],
      directors: ['d'],
      writers: ['e'],
    };
    component.movieFromDb = {
      id: null,
      name: 'abc',
      year: 444,
      plot: 'qwery',
      actors: ['a', 'b', 'c'],
      directors: ['d'],
      writers: ['e'],
    };

    expect(component.cantBeSaved()).toBeTrue();

    verify(StoreMock.dispatch(anyOfClass(SetUnsavedChanges))).times(2);

    component.movie.name = 'urouaiofuiaof';

    expect(component.cantBeSaved()).toBeFalse();

    verify(StoreMock.dispatch(anyOfClass(SetUnsavedChanges))).times(3);

    const secondCall = capture(StoreMock.dispatch).second();
    const thirdCall = capture(StoreMock.dispatch).third();

    expect(secondCall[0].unsavedChanges).toBeFalse();
    expect(thirdCall[0].unsavedChanges).toBeTrue();

  });
});

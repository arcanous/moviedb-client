export interface Movie {
  id: string;
  name: string;
  year: number;
  plot: string;
  actors: string[];
  directors: string[];
  writers: string[];
}

export interface Person {
  id: string;
  name: string;
  birthYear: number;
  nationality: string;
  movies?: Movie[];
}

export type Actor = Person;
export type Director = Person;
export type Writer = Person;

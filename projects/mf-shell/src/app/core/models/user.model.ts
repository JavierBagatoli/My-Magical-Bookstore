import { Author } from "./author.model";
import { Genre } from "./genre.model";
import { Review } from "./review.model";
import { TasteType } from "./taste-type.type";

export interface User {
  id: string;
  name: string;
  nickname: string;
  age: number;
  email: string;

  avatarUrl?: string;
  biography?: string;

  tastes: Taste[];
  preferences: UserPreferences;

  readBooks: string[];
  booksToRead: string[];
  currentlyReading: string[];

  reviews: Review[];
  ratings: string[];

  registrationDate: Date;
  lastActivity?: Date;
  active: boolean;
}

export interface Taste {
  id: string;
  name: string;
  type: TasteType;
}

export interface UserPreferences {
  favoriteGenres: Genre[];
  favoriteAuthors: Author[];
  preferredLanguage: string;

  minimumRecommendedAge?: number;
  maximumRecommendedAge?: number;
}
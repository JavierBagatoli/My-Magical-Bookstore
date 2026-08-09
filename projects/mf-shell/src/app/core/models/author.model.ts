import { Book } from "./book.model";

export interface Author {
  id: string;

  firstName: string;
  lastName?: string;

  fullName: string;

  biography?: string;
  photoUrl?: string;

  birthDate?: Date;
  deathDate?: Date;

  nationality?: string;

  books: Book[];
}
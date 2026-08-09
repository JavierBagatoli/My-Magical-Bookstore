import { Book } from "./book.model";

export interface BookSeries {
  id: string;

  name: string;
  description?: string;

  books: Book[];
}
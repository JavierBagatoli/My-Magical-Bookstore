import { BookStatus } from "./book-status.type";

export interface Book {
  id: string;

  title: string;
  subtitle?: string;

  synopsis: string;

  coverUrl?: string;

  isbn?: string;
  isbn13?: string;

  pages?: number;
  language: string;

  publicationDate?: Date;

  genres: string[];
  authors: string[];

  publisher?: string;

  series?: string;
  seriesNumber?: number;

  tags: string[];

  rating: number;

  status: BookStatus;

  createdAt: Date;
  updatedAt: Date;
}
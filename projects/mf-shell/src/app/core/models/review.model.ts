import { Book } from "./book.model";
import { ReviewStatus } from "./review-status.type";
import { User } from "./user.model";

export interface Review {
  id: string;

  userId: string;
  bookId: string;

  user?: User;
  book?: Book;

  title?: string;
  content: string;

  status: ReviewStatus;

  containsSpoilers: boolean;

  likes: number;

  createdAt: Date;
  updatedAt?: Date;
}
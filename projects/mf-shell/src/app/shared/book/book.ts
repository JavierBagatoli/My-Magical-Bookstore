import { Component, Input } from '@angular/core';
import { Book } from '../../core/models/book.model';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'book',
  imports: [SkeletonModule],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class BookComponent {
  @Input({ required: true }) data!: Book;
}

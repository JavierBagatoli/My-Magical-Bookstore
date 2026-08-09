import { Component, signal } from '@angular/core';
import { BookComponent } from "../../shared/book/book";
import { bookstore } from '../../mocks/books';
import { CarouselComponent } from "../../shared/carousel/carousel";

@Component({
  selector: 'home',
  imports: [BookComponent, CarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public readonly listOfBooks = signal(bookstore)
}
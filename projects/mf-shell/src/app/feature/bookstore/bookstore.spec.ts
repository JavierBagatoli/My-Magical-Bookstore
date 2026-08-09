import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookstore } from './bookstore';

describe('Bookstore', () => {
  let component: Bookstore;
  let fixture: ComponentFixture<Bookstore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookstore],
    }).compileComponents();

    fixture = TestBed.createComponent(Bookstore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

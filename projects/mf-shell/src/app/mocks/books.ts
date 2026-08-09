import { Book } from "../core/models/book.model";

const book1: Book = {
    id: "bb1",
    title: "El Sector Muerto",
    subtitle: "El Fracaso de los Antiguos",

    synopsis: "Durante muchos años pasaron cosas que no voy a explicar a nadie ma porque este es un lore ipsum",

    coverUrl: "",

    isbn: "string",
    isbn13: "string",

    pages: 100,
    language: "",

    publicationDate: new Date('10/10/2000'),

    genres: ["gg1"], //id Genero
    authors: ["au1"], //id Autor

    publisher: "b",

    series: "bs1",
    seriesNumber: 0,

    tags: [""],

    rating: 4,

    status: 'published',

    createdAt: new Date(),
    updatedAt: new Date(),
}

const book2: Book = {
    id: "bb2",
    title: "Migajas del pasado",

    synopsis: "Durante muchos años pasaron cosas que no voy a explicar a nadie ma porque este es un lore ipsum",

    coverUrl: "",

    isbn: "string",
    isbn13: "string",

    pages: 100,
    language: "",

    publicationDate: new Date('10/10/2000'),

    genres: ["gg1"], //id Genero
    authors: ["au1"], //id Autor

    publisher: "b",

    series: "bs1",
    seriesNumber: 0,

    tags: [""],

    rating: 4,

    status: 'published',

    createdAt: new Date(),
    updatedAt: new Date(),
}

export const bookstore: Book[] = [
   book1, book2
]


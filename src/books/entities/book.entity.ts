import { Book as BookModel, BookAuthor as BookAuthorModel} from "@prisma/client";

export class BookEntity implements BookModel {
  id: string;
  title: string;
  authors: BookAuthorModel[];
}

import { Author as AuthorModel, BookAuthor as BookAuthorModel } from "@prisma/client";

export class AuthorEntity implements AuthorModel {
    id: string;
    name: string;
    books: BookAuthorModel[];
    // books //relationship

}

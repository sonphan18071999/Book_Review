import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Book, GetBooksByTitleDocument,
} from '../graphql/code-generated/generated';

@Injectable({
  providedIn: 'root',
})
export class BookGraphQLService {
  constructor(private apollo: Apollo) {}

  getBookByTitle(title: string): Book[] {
    const books = [] as Book[];
    this.apollo
      .watchQuery({
        query: GetBooksByTitleDocument,
        variables: {
          title: title,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        console.log('book retrieves', data);
      });

    return books;
  }
}

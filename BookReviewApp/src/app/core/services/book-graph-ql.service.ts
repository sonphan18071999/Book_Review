import { Injectable } from '@angular/core';
import { Apollo, Query, QueryRef } from 'apollo-angular';
import {
  Book,
  GetBookByIdDocument,
  GetBookByIdQuery,
  GetBooksByTitleDocument,
  GetBooksPublishedLatestDocument,
  GetBooksPublishedLatestQuery
} from '../graphql/code-generated/generated';
import { Observable, Subscription, map, pipe } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client';

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
        // console.log('book retrieves', data);
      });

    return books;
  }

  getMostInterestedBooks(maxItems: number, offset: number): Observable<ApolloQueryResult<GetBooksPublishedLatestQuery>> {
    return this.apollo.watchQuery<GetBooksPublishedLatestQuery>({
      query: GetBooksPublishedLatestDocument,
      variables: {
        maxItems,
        offset
      },
    }).valueChanges;
  }

  getAllBooksByPage(maxItems: number, offset: number): Observable<ApolloQueryResult<GetBooksPublishedLatestQuery>> {
    return this.apollo.watchQuery<GetBooksPublishedLatestQuery>({
      query: GetBooksPublishedLatestDocument,
      variables: {
        maxItems,
        offset
      },
    }).valueChanges;
  }

  getBookById(id: string): Observable<ApolloQueryResult<GetBookByIdQuery>>{
    return this.apollo.watchQuery<GetBookByIdQuery>({
      query: GetBookByIdDocument,
      variables: {
        bookByIdId: id
      },
    }).valueChanges;
  }

}

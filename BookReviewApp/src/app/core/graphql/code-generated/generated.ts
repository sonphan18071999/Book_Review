import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Binary: { input: any; output: any; }
  Date: { input: any; output: any; }
};

export type Author = {
  __typename?: 'Author';
  bio?: Maybe<Scalars['String']['output']>;
  books: Array<Maybe<Book>>;
  created_at: Scalars['Date']['output'];
  updated_at: Scalars['Date']['output'];
  user?: Maybe<User>;
};

export type Book = {
  __typename?: 'Book';
  cover_image?: Maybe<Scalars['Binary']['output']>;
  created_at: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  id: Scalars['ID']['output'];
  publish_date?: Maybe<Scalars['Date']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['Date']['output'];
};

export type Genre = {
  __typename?: 'Genre';
  alias?: Maybe<Scalars['String']['output']>;
  books?: Maybe<Array<Maybe<Book>>>;
  created_at: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['Date']['output'];
};

export type Query = {
  __typename?: 'Query';
  bookById?: Maybe<Book>;
  bookByTitle?: Maybe<Book>;
  genreById?: Maybe<Genre>;
  genreByName?: Maybe<Genre>;
};


export type QueryBookByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBookByTitleArgs = {
  title?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGenreByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGenreByNameArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['Binary']['output']>;
  created_at: Scalars['Date']['output'];
  date_of_birth?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  full_name?: Maybe<Scalars['String']['output']>;
  read_books: Array<Maybe<Book>>;
  updated_at: Scalars['Date']['output'];
};

export type GetBookByTitleQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetBookByTitleQuery = { __typename?: 'Query', bookByTitle?: { __typename?: 'Book', title: string, rating?: number | null, publisher?: string | null, publish_date?: any | null } | null };

export type GetBookByIdQueryVariables = Exact<{
  bookByIdId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetBookByIdQuery = { __typename?: 'Query', bookById?: { __typename?: 'Book', title: string, rating?: number | null, publisher?: string | null } | null };

export const GetBookByTitleDocument = gql`
    query getBookByTitle($title: String) {
  bookByTitle(title: $title) {
    title
    rating
    publisher
    publish_date
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBookByTitleGQL extends Apollo.Query<GetBookByTitleQuery, GetBookByTitleQueryVariables> {
    override document = GetBookByTitleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBookByIdDocument = gql`
    query getBookById($bookByIdId: ID) {
  bookById(id: $bookByIdId) {
    title
    rating
    publisher
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBookByIdGQL extends Apollo.Query<GetBookByIdQuery, GetBookByIdQueryVariables> {
    override document = GetBookByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

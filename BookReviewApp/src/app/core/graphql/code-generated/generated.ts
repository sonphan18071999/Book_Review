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
  /** Date in ISO */
  Date: { input: any; output: any; }
  /** URI for assets */
  URI: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

/** Book data representation */
export type Book = {
  __typename?: 'Book';
  cover_image?: Maybe<Scalars['URI']['output']>;
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

/** Genre data representation */
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

export type Mutation = {
  __typename?: 'Mutation';
  /** Create Genre - Book relation */
  addBookToGenre: Genre;
  /** Create a new Book record */
  createBook: Book;
  /** Create a new Genre record */
  createGenre: Genre;
  /** Remove Genre - Book relation */
  removeBookFromGenre: Genre;
  /**
   * Upload a book's cover_image which contain in a multipart/form-data
   * need to provide a non-empty value for one of the following headers: x-apollo-operation-name, apollo-require-preflight
   */
  uploadBookCoverImage?: Maybe<UploadResult>;
};


export type MutationAddBookToGenreArgs = {
  bookId: Scalars['ID']['input'];
  genreId: Scalars['ID']['input'];
};


export type MutationCreateBookArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  publish_date?: InputMaybe<Scalars['Date']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateGenreArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationRemoveBookFromGenreArgs = {
  bookId: Scalars['ID']['input'];
  genreId: Scalars['ID']['input'];
};


export type MutationUploadBookCoverImageArgs = {
  bookId: Scalars['ID']['input'];
  cover_image: Scalars['Upload']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Get a book's detail by its id */
  bookById: Book;
  /** Get a list of books by search with its title which contains the provided string */
  booksByTitle: Array<Maybe<Book>>;
  /** Get the most recent published book with an optional offset. Default maxItems is 10 and default offet is 0 */
  booksPublishedLatest: Array<Book>;
  /** Get a genre's details by its id */
  genreById: Genre;
  /** Get a list of genres by search with its name which contains the provied string */
  genresByName: Array<Maybe<Genre>>;
};


export type QueryBookByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBooksByTitleArgs = {
  title: Scalars['String']['input'];
};


export type QueryBooksPublishedLatestArgs = {
  maxItems?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGenreByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGenresByNameArgs = {
  name: Scalars['String']['input'];
};

export type UploadResult = {
  __typename?: 'UploadResult';
  book?: Maybe<Book>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreateBookDisplayForHomePageMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateBookDisplayForHomePageMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', id: string, title: string, description?: string | null } };

export type GetBooksByTitleQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type GetBooksByTitleQuery = { __typename?: 'Query', booksByTitle: Array<{ __typename?: 'Book', title: string, publisher?: string | null, rating?: number | null, id: string } | null> };

export type GetBookByIdQueryVariables = Exact<{
  bookByIdId: Scalars['ID']['input'];
}>;


export type GetBookByIdQuery = { __typename?: 'Query', bookById: { __typename?: 'Book', cover_image?: any | null, description?: string | null, id: string, publish_date?: any | null, publisher?: string | null, rating?: number | null, title: string } };

export type GetBookByIdForDetailQueryVariables = Exact<{
  bookByIdId: Scalars['ID']['input'];
}>;


export type GetBookByIdForDetailQuery = { __typename?: 'Query', bookById: { __typename?: 'Book', title: string, updated_at: any, description?: string | null, rating?: number | null, publish_date?: any | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } };

export type GetBooksPublishedLatestQueryVariables = Exact<{
  maxItems?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetBooksPublishedLatestQuery = { __typename?: 'Query', booksPublishedLatest: Array<{ __typename?: 'Book', title: string, publisher?: string | null, rating?: number | null, publish_date?: any | null, id: string, cover_image?: any | null, description?: string | null }> };

export type UploadBookCoverImageMutationVariables = Exact<{
  coverImage: Scalars['Upload']['input'];
  bookId: Scalars['ID']['input'];
}>;


export type UploadBookCoverImageMutation = { __typename?: 'Mutation', uploadBookCoverImage?: { __typename?: 'UploadResult', book?: { __typename?: 'Book', id: string, title: string, description?: string | null, created_at: any, updated_at: any } | null } | null };

export const CreateBookDisplayForHomePageDocument = gql`
    mutation createBookDisplayForHomePage($title: String!, $description: String) {
  createBook(title: $title, description: $description) {
    id
    title
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateBookDisplayForHomePageGQL extends Apollo.Mutation<CreateBookDisplayForHomePageMutation, CreateBookDisplayForHomePageMutationVariables> {
    override document = CreateBookDisplayForHomePageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBooksByTitleDocument = gql`
    query getBooksByTitle($title: String!) {
  booksByTitle(title: $title) {
    title
    publisher
    rating
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBooksByTitleGQL extends Apollo.Query<GetBooksByTitleQuery, GetBooksByTitleQueryVariables> {
    override document = GetBooksByTitleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBookByIdDocument = gql`
    query getBookById($bookByIdId: ID!) {
  bookById(id: $bookByIdId) {
    cover_image
    description
    id
    publish_date
    publisher
    rating
    title
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
export const GetBookByIdForDetailDocument = gql`
    query getBookByIdForDetail($bookByIdId: ID!) {
  bookById(id: $bookByIdId) {
    title
    updated_at
    description
    rating
    publish_date
    genres {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBookByIdForDetailGQL extends Apollo.Query<GetBookByIdForDetailQuery, GetBookByIdForDetailQueryVariables> {
    override document = GetBookByIdForDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBooksPublishedLatestDocument = gql`
    query getBooksPublishedLatest($maxItems: Int, $offset: Int) {
  booksPublishedLatest(maxItems: $maxItems, offset: $offset) {
    title
    publisher
    rating
    publish_date
    id
    cover_image
    rating
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBooksPublishedLatestGQL extends Apollo.Query<GetBooksPublishedLatestQuery, GetBooksPublishedLatestQueryVariables> {
    override document = GetBooksPublishedLatestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UploadBookCoverImageDocument = gql`
    mutation uploadBookCoverImage($coverImage: Upload!, $bookId: ID!) {
  uploadBookCoverImage(cover_image: $coverImage, bookId: $bookId) {
    book {
      id
      title
      description
      created_at
      updated_at
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UploadBookCoverImageGQL extends Apollo.Mutation<UploadBookCoverImageMutation, UploadBookCoverImageMutationVariables> {
    override document = UploadBookCoverImageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
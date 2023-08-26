import { TestBed } from '@angular/core/testing';

import { BookGraphQLService } from './book-graph-ql.service';

describe('BookGraphQLService', () => {
  let service: BookGraphQLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookGraphQLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

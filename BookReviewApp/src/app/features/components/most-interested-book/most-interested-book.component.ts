import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GetBooksPublishedLatestQuery } from 'src/app/core/graphql/code-generated/generated';
import { BookGraphQLService } from 'src/app/core/services';

@Component({
  selector: 'app-most-interested-book',
  templateUrl: './most-interested-book.component.html',
})
export class MostInterestedBookComponent implements OnInit, OnDestroy{
  books = [] as GetBooksPublishedLatestQuery["booksPublishedLatest"];
  onDestroy$: Subject<void> = new Subject();

  constructor(private router: Router,
    protected bookGraphQLService: BookGraphQLService) {}

  ngOnInit(): void {
    this.bookGraphQLService.getMostInterestedBooks(3,1).subscribe(res=>{
      this.books = [...res.data.booksPublishedLatest];
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  viewDetail(): void {
    this.router.navigate(['/book/detail',2]);
  }
}

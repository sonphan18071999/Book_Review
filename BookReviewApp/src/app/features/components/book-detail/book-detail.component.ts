import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, switchMap } from 'rxjs';
import { GetBookByIdQuery } from 'src/app/core/graphql/code-generated/generated';
import { BookGraphQLService } from 'src/app/core/services';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit {
  book = {} as GetBookByIdQuery["bookById"];

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected bookGraphQLService: BookGraphQLService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => this.bookGraphQLService.getBookById(params["id"]))
    ).subscribe(res => {
      this.book = res.data.bookById;
    });
  }
}

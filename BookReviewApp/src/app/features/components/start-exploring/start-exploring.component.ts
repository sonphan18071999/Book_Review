import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBooksPublishedLatestQuery } from 'src/app/core/graphql/code-generated/generated';
import { BookGraphQLService } from 'src/app/core/services';

@Component({
  selector: 'app-start-exploring',
  templateUrl: './start-exploring.component.html',
})
export class StartExploringComponent implements OnInit {
  
  books = [] as GetBooksPublishedLatestQuery["booksPublishedLatest"];
  
  constructor(protected bookGraphQLService: BookGraphQLService, protected router: Router) {}

  ngOnInit(): void {
    this.bookGraphQLService.getAllBooksByPage(10,0).subscribe(res=>{
      this.books = res.data.booksPublishedLatest;
    })  
  }

  viewDetailBook(id: string): void{
    this.router.navigate(["book/detail/" + id]);
  }
}

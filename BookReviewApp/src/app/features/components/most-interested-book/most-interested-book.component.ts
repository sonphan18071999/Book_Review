import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookGraphQLService } from 'src/app/core/services';

@Component({
  selector: 'app-most-interested-book',
  templateUrl: './most-interested-book.component.html',
})
export class MostInterestedBookComponent implements OnInit{
  books = [{}, {}, {}];

  constructor(private router: Router,
    protected bookGraphQLService: BookGraphQLService) {}

  ngOnInit(): void {
    this.bookGraphQLService;
  }

  viewDetail(): void {
    this.router.navigate(['/book/detail',2]);
  }
}

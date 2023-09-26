import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-description-review',
  templateUrl: './book-description-review.component.html'
})
export class BookDescriptionReviewComponent implements OnInit{

  @Input() description: string | null | undefined = '';

  ngOnInit(): void {
  }
}

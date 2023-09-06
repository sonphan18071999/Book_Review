import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-most-interested-book',
  templateUrl: './most-interested-book.component.html',
})
export class MostInterestedBookComponent {
  books = [{}, {}, {}];

  constructor(private router: Router) {}

  viewDetail(): void {
    this.router.navigate(['/book/detail',2]);
  }
}

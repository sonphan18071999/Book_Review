import { Component, OnInit } from '@angular/core';
import { BookGraphQLService } from 'src/app/core/services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit{
  constructor(private bookGraphQLService: BookGraphQLService) {}
  ngOnInit(): void {
    this.bookGraphQLService.getBookByTitle("Blind Justice");
  }
}

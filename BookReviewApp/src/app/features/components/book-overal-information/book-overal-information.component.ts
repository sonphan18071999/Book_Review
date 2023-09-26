import { Component, Input } from '@angular/core';
import { GetBookByIdQuery } from 'src/app/core/graphql/code-generated/generated';

@Component({
  selector: 'app-book-overal-information',
  templateUrl: './book-overal-information.component.html'
})
export class BookOveralInformationComponent {
  @Input() bookDetail: GetBookByIdQuery["bookById"] = {} as GetBookByIdQuery["bookById"];
}

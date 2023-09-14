import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDescriptionReviewComponent } from './book-description-review.component';
import { SectionTitleModule } from '../../commons/section-title/section-title.module';

@NgModule({
  declarations: [BookDescriptionReviewComponent],
  imports: [CommonModule, SectionTitleModule],
  exports: [BookDescriptionReviewComponent],
})
export class BookDescriptionReviewModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { SectionTitleModule } from '../section-title/section-title.module';

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    SectionTitleModule
  ],
  exports:[
    RatingComponent
  ]
})
export class RatingModule { }

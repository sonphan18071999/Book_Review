import { NgModule } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { SectionTitleModule } from '../section-title/section-title.module';

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    SectionTitleModule,
    KeyValuePipe
  ],
  exports:[
    RatingComponent
  ]
})
export class RatingModule { }

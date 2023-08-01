import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostInterestedBookComponent } from './most-interested-book.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MostInterestedBookComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    MostInterestedBookComponent
  ]
})
export class MostInterestedBookModule { }

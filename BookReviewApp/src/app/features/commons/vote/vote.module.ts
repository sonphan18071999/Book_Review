import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    VoteComponent

  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    VoteComponent
  ]
})
export class VoteModule { }

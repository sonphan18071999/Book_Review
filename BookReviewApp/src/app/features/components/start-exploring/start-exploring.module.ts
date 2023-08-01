import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartExploringComponent } from './start-exploring.component';

@NgModule({
  declarations: [StartExploringComponent],
  imports: [
    CommonModule
  ],
  exports:[
    StartExploringComponent
  ]
})
export class StartExploringModule { }

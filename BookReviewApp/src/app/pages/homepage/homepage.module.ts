import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { MostInterestedBookModule } from 'src/app/features/components/most-interested-book/most-interested-book.module';
import { StartExploringModule } from 'src/app/features/components/start-exploring/start-exploring.module';

@NgModule({
  declarations: [
    HomepageComponent,
    
  ],
  imports: [
    CommonModule,
    MostInterestedBookModule,
    StartExploringModule
  ]
})
export class HomepageModule { }

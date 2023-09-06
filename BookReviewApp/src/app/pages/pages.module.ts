import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModule } from './homepage/homepage.module';
import { BookDetailComponent } from '../features/components/book-detail/book-detail.component';
import { BookLayoutComponent } from './book-layout/book-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BookDetailComponent,
    BookLayoutComponent
  ],
  imports: [
    CommonModule,
    HomepageModule,
    RouterModule
  ]
})
export class PagesModule { }

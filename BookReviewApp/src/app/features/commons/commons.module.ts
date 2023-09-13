import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    PaginationModule
  ],
  exports:[]
})
export class CommonsModule { }

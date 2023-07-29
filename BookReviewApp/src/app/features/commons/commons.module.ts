import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports:[]
})
export class CommonsModule { }

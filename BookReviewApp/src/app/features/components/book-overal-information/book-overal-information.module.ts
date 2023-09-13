import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookOveralInformationComponent } from './book-overal-information.component';
import { SectionTitleModule } from '../../commons/section-title/section-title.module';

@NgModule({
  declarations: [BookOveralInformationComponent],
  imports: [CommonModule, SectionTitleModule],
  exports: [BookOveralInformationComponent],
})
export class BookOveralInformationModule {}

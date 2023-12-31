import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SectionTitleModule } from '../section-title/section-title.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    SectionTitleModule
  ],
  exports:[
    UserComponent
  ]
})
export class UserModule { }

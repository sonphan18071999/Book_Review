import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModule } from './homepage/homepage.module';
import { BookDetailComponent } from '../features/components/book-detail/book-detail.component';
import { RouterModule } from '@angular/router';
import { CommonsModule } from '../features/commons/commons.module';
import { PaginationModule } from "../features/commons/pagination/pagination.module";
import { UserModule } from '../features/commons/user/user.module';
import { VoteModule } from "../features/commons/vote/vote.module";
import { BookOveralInformationModule } from '../features/components/book-overal-information/book-overal-information.module';
import { RatingModule } from '../features/commons/rating/rating.module';

@NgModule({
    declarations: [
        BookDetailComponent,
    ],
    imports: [
        CommonModule,
        CommonsModule,
        HomepageModule,
        RouterModule,
        PaginationModule,
        UserModule,
        VoteModule,
        BookOveralInformationModule,
        RatingModule
    ]
})
export class PagesModule { }

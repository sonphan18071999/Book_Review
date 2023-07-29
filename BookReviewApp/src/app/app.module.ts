import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CommonsModule } from './features/commons/commons.module';
import { HeaderModule } from "./features/commons/header/header.module";
import { FooterModule } from './features/commons/footer/footer.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        CommonsModule,
        HeaderModule,
        FooterModule
    ]
})
export class AppModule { }


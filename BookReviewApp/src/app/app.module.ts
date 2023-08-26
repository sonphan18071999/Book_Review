import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CommonsModule } from './features/commons/commons.module';
import { HeaderModule } from "./features/commons/header/header.module";
import { FooterModule } from './features/commons/footer/footer.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [{
        provide: APOLLO_OPTIONS,
        useFactory(httpLink: HttpLink) {
            return {
              cache: new InMemoryCache(),
              link: httpLink.create({
                uri: 'http://localhost:8080/graphql',
              }),
            };
          },
          deps: [HttpLink]
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        CommonsModule,
        HeaderModule,
        FooterModule,
        GraphQLModule,
        HttpClientModule
    ],

})
export class AppModule { }


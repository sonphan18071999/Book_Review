import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './features/components/book-detail/book-detail.component';
import { BookLayoutComponent } from './pages/book-layout/book-layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'book',
    component: BookLayoutComponent,
    children: [
      {
        path: 'detail/:id',
        component: BookDetailComponent,
      },
    ],
  },
  {
    path: '**',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

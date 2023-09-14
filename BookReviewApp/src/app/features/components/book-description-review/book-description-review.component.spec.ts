import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescriptionReviewComponent } from './book-description-review.component';

describe('BookDescriptionReviewComponent', () => {
  let component: BookDescriptionReviewComponent;
  let fixture: ComponentFixture<BookDescriptionReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDescriptionReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDescriptionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

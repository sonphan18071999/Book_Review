import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOveralInformationComponent } from './book-overal-information.component';

describe('BookOveralInformationComponent', () => {
  let component: BookOveralInformationComponent;
  let fixture: ComponentFixture<BookOveralInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOveralInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOveralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

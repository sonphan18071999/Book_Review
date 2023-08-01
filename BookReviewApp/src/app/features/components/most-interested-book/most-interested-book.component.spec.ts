import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostInterestedBookComponent } from './most-interested-book.component';

describe('MostInterestedBookComponent', () => {
  let component: MostInterestedBookComponent;
  let fixture: ComponentFixture<MostInterestedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostInterestedBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostInterestedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

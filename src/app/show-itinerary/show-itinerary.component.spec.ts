import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItineraryComponent } from './show-itinerary.component';

describe('ShowItineraryComponent', () => {
  let component: ShowItineraryComponent;
  let fixture: ComponentFixture<ShowItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowItineraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

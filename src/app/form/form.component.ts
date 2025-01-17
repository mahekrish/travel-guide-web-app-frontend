import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,

  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  location: string = '';
  days!: number;
  budget: string = '';
  @Output() generateItinerary = new EventEmitter();
  @Output() goBack = new EventEmitter();

  backFn(): void {
    this.goBack.emit(true);
  }

  generateItineraryFn(): void {
    const itineraryRequest = {
      location: this.location,
      days: this.days,
      budget: this.budget,
    };
    this.generateItinerary.emit(itineraryRequest);
  }
}

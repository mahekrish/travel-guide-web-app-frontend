import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-show-itinerary',
  standalone: false,
  templateUrl: './show-itinerary.component.html',
  styleUrl: './show-itinerary.component.scss',
})
export class ShowItineraryComponent implements OnChanges {
  @Input() itinerary: any;
  @ViewChild('generatedItineraryCardContent')
  generatedItineraryCardContent!: ElementRef;
  @Output() goBack = new EventEmitter();
  markedItinerary: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.itinerary) {
      this.markedItinerary = marked(this.itinerary);
    }
  }
  scrollToTop() {
    if (
      this.generatedItineraryCardContent &&
      this.generatedItineraryCardContent.nativeElement
    )
      this.generatedItineraryCardContent.nativeElement.scrollTo({
        top: 0,
        behavior: 'smooth', // Enables smooth scrolling animation
      });
  }

  backFn(): void {
    this.goBack.emit(true);
  }
}

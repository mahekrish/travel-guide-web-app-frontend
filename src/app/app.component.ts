import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  model,
  OnInit,
} from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  itinerary: string | undefined | null;
  readonly labelPosition = model<'stepper' | 'form' | null>('stepper');
  selectedUi = 'stepper';
  isLoading = false;

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  generateItinerary(itineraryRequest: any) {
    this.isLoading = true;
    this.cdr.detectChanges();
    this.apiService.generateItinerary(itineraryRequest).subscribe({
      next: (response) => {
        this.itinerary = response.itinerary;
        console.log(this.itinerary);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }

  ngOnInit(): void {
    // this.labelPosition.subscribe((val) => {
    //   this.selectedUi = val;
    //   console.log('selectedUi');
    //   this.cdr.detectChanges();
    // });
  }
  resetUiSelection() {
    console.log('resetUiSelection');
    this.labelPosition.set(null);
    this.itinerary = null;
    this.cdr.detectChanges();
  }
  onChange() {
    console.log(this.labelPosition.name);
  }
}

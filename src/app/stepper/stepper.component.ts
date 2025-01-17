import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  standalone: false,
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  private _formBuilder = inject(FormBuilder);

  zerothFormGroup = this._formBuilder.group({
    interests: ['', Validators.required],
  });
  firstFormGroup = this._formBuilder.group({
    destination: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    days: ['', [Validators.required, Validators.max(7), Validators.min(1)]],
  });
  thirdFormGroup = this._formBuilder.group({
    budget: ['', [Validators.required, Validators.min(1000)]],
  });
  isEditable = false;
  interests: Array<{
    key: string;
    value: string;
    locations: Array<string>;
  }> = [
    {
      key: '1',
      value: 'Historical and Architectural Sites',
      locations: [
        'Chennai',
        'Mahabalipuram (Mamallapuram)',
        'Thanjavur (Tanjore) ',
        'Madurai',
        'Chettinad',
        'Kancheepuram',
      ],
    },
    {
      key: '2',
      value: 'Hill Stations',
      locations: ['Ooty (Udhagamandalam)', 'Kodaikanal', 'Coonoor', 'Yercaud '],
    },
    {
      key: '3',
      value: 'Pilgrimage Sites',
      locations: [
        'Rameswaram',
        'Chidambaram ',
        'Tiruvannamalai',
        'Kumbakonam',
        'Palani',
      ],
    },
    {
      key: '4',
      value: 'Wildlife and Nature',
      locations: [
        'Mudumalai National Park',
        'Anamalai Tiger Reserve (Indira Gandhi Wildlife Sanctuary) ',
        'Valparai',
        'Pichavaram Mangrove Forest',
      ],
    },
    {
      key: '5',
      value: 'Beaches and Coastal Attractions',
      locations: [
        'Pondicherry (Puducherry)',
        'Kanyakumari ',
        'Covelong (Kovalam)',
        'Thoothukudi (Tuticorin) ',
      ],
    },
    {
      key: '6',
      value: 'Cultural and Scenic Towns',
      locations: [
        'Coimbatore',
        'Tiruchirappalli (Trichy)',
        'Nagapattinam and Velankanni',
      ],
    },
  ];
  @Output() generateItinerary = new EventEmitter();
  @Output() goBack = new EventEmitter();
  destinationLabel!: string;
  selectedInterest!: string;
  showInterestSelection = true;
  locations: Array<string> = [];
  generateItineraryFn(): void {
    const itineraryRequest = {
      location: this.firstFormGroup.get('destination')?.value,
      days: this.secondFormGroup.get('days')?.value,
      budget: this.thirdFormGroup.get('budget')?.value,
    };
    this.generateItinerary.emit(itineraryRequest);
  }
  backFn(): void {
    this.goBack.emit(true);
  }

  setInterests(value: string) {
    const interest = this.selectedInterest === value ? '' : value;
    this.selectedInterest = interest;
    if (this.selectedInterest) {
      const filtered = this.interests.find(
        (el) => el.key === this.selectedInterest
      );
      this.locations = filtered ? filtered.locations : [];
      this.destinationLabel = filtered ? filtered.value : '';
    } else {
      this.locations = [];
      this.destinationLabel = '';
    }
  }
}

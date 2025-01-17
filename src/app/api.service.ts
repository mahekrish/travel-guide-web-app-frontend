import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  generateItinerary(itineraryRequest: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost:5000/generate',
      itineraryRequest
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  productData: object = {};

  productDataSubject = new BehaviorSubject(this.productData);
  constructor(private http: HttpClient) {
    this.http.get('./api/products').subscribe((data) => {
      this.productDataSubject.next(data);
    });
  }
}

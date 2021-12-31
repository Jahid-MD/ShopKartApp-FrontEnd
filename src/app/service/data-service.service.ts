import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  productData: object = {};

  productDataSubject = new BehaviorSubject(this.productData);
  constructor(private http: HttpClient) {}
  getintialProductData() {
    this.http.get('./api/products').subscribe((data) => {
      this.productDataSubject.next(data);
      console.log(data);
    });
  }
  getProductData(filterData) {
    let filterObj = {
      isAccessory: null,
      isMenFashion: null,
    };

    if (filterData.fashion == 'Men') {
      filterObj.isMenFashion = true;
    } else if (filterData.fashion == 'Women') {
      filterObj.isMenFashion = false;
    } else {
      filterObj.isMenFashion = null;
    }

    if (
      filterData.isCatAll ||
      (filterData.isCatAccessories && filterData.isCatClothing)
    ) {
      filterObj.isAccessory = null;
    } else if (filterData.isCatClothing) {
      filterObj.isAccessory = false;
    } else if (filterData.isCatAccessories) {
      filterObj.isAccessory = true;
    } else {
      filterObj.isAccessory = null;
    }

    console.log(
      `./api called`,
      `./api/products?isAccessory=${filterObj.isAccessory}&isMenFashion=${filterObj.isMenFashion}`
    );
    this.http
      .get(
        `./api/products?isAccessory=${filterObj.isAccessory}&isMenFashion=${filterObj.isMenFashion}`
      )
      .subscribe((data) => {
        this.productDataSubject.next(data);
        console.log('api response got', data);
      });
  }
}

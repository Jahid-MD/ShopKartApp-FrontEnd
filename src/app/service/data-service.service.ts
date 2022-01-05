import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  isAdmin: Boolean;
  cartQty: number = 0;
  productData: object = {};

  productDataSubject = new BehaviorSubject(this.productData);
  cartSubject = new BehaviorSubject(this.cartQty);

  constructor(private http: HttpClient, private router: Router) {}

  getintialProductData() {
    this.http.get('./api/products').subscribe((data) => {
      this.productDataSubject.next(data);
    });
  }
  getProductData(filterData) {
    let filterObj = {
      isAccessory: null,
      isMenFashion: null,
    };

    //setting Fashion
    if (filterData.fashion == 'Men') {
      filterObj.isMenFashion = true;
    } else if (filterData.fashion == 'Women') {
      filterObj.isMenFashion = false;
    } else {
      filterObj.isMenFashion = null;
    }

    //setting Categories
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

    this.http
      .get(
        `./api/products?isAccessory=${filterObj.isAccessory}&isMenFashion=${filterObj.isMenFashion}&min=${filterData.minPrice}&max=${filterData.maxPrice}`
      )
      .subscribe((data) => {
        this.productDataSubject.next(data);
      });
  }
  getTotalAmount(Data: object): object {
    let productCostArr = [];
    let productQty = 0;
    Data['keys'].map((key) => {
      productCostArr.push(Data[key]['price'] * Data[key]['qty']);
      productQty = productQty + Data[key]['qty'];
    });
    const sum = productCostArr.reduce((partial_sum, a) => partial_sum + a, 0);
    this.cartQty = productQty;
    return { totalAmount: sum, totalQty: productQty };
  }
  updateCart() {
    this.http.get('/api/cart').subscribe((data) => {
      this.cartQty = this.getTotalAmount(data)['totalQty'];
      this.cartSubject.next(this.cartQty);
    });
  }
}

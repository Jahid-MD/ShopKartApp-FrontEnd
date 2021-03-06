import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productData: object;

  param: string = this.route.url.split('/').pop();
  constructor(
    private route: Router,
    private http: HttpClient,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    console.log(this.param);
    this.http.get(`./api/product/${this.param}`).subscribe((data) => {
      console.log(data);
      this.productData = data;
    });
  }
  sendToCart(id) {
    this.http.post(`./api/cart/${id}`, {}).subscribe();
    this.dataService.updateCart();
  }
}

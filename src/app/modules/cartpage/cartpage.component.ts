import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss'],
})
export class CartpageComponent implements OnInit {
  cartData: object = { keys: [] };
  sumData: object;
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http.get('/api/cart').subscribe((data) => {
      console.log(data);
      this.cartData = data;
      this.sumData = this.dataService.getTotalAmount(data);
    });
  }
  placeOrder() {
    this.router.navigate(['confirm']);
    this.http.post('/api/placeOrder', {}).subscribe();
    this.dataService.updateCart();
  }
}

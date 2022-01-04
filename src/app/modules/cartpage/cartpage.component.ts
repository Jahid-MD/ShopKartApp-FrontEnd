import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss'],
})
export class CartpageComponent implements OnInit {
  cartData: object = { keys: [] };
  sumData: object;
  constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    this.http.get('/api/cart').subscribe((data) => {
      console.log(data);
      this.cartData = data;
      this.sumData = this.dataService.getTotalAmount(data);
    });
  }
}

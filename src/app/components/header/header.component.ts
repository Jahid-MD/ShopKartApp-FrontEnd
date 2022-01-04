import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  CartQty: number = 0;
  constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.cartSubject.subscribe((data) => {
      console.log(data, '........');
      this.CartQty = data;
    });
    this.dataService.updateCart();
  }

  getSearchedData(event) {
    console.log(event.value);
    this.http.get(`api/products/${event.value}`).subscribe((data) => {
      console.log(data);
      this.dataService.productDataSubject.next(data);
    });
  }
}

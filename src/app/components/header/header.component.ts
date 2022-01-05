import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  CartQty: number = 0;
  isAdmin: Boolean = false;
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http.get('api/profileData/1').subscribe((data) => {
      this.isAdmin = data['isAdmin'];
      this.dataService.isAdmin = this.isAdmin;
    });
    this.dataService.cartSubject.subscribe((data) => {
      console.log(data, '........');
      this.CartQty = data;
    });
    this.dataService.updateCart();
  }

  getSearchedData(event) {
    if (this.router.url != '/') {
      this.router.navigate(['/']);
    }
    console.log(event.value);
    this.http.get(`api/products/${event.value}`).subscribe((data) => {
      console.log(data);
      this.dataService.productDataSubject.next(data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
})
export class ProductContainerComponent implements OnInit {
  productData: object;
  constructor(private dataService: DataService) {
    this.dataService.productDataSubject.subscribe((data) => {
      this.productData = data;
      console.log(this.productData);
    });
  }

  ngOnInit(): void {}
}

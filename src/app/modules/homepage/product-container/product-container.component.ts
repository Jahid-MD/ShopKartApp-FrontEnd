import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
})
export class ProductContainerComponent implements OnInit {
  productData: object;
  isAccessory: boolean;
  isClothing: boolean;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.productDataSubject.subscribe((data) => {
      this.productData = data;
      console.log(this.productData);
      if (data['keys']) {
        this.productData['keys'].map((key) => {
          if (this.productData[key].isAccessory == true) {
            this.isAccessory = true;
          } else {
            this.isClothing = true;
            console.log('clothin ix true');
          }
        });
      }
    });
  }
}

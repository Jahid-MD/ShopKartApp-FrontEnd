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
      if (data['keys']) {
        let count1 = 0;
        let count2 = 0;
        this.productData['keys'].map((key: string) => {
          this.productData[key].isAccessory == true ? count1++ : count2++;
        });
        count1 != 0 ? (this.isAccessory = true) : (this.isAccessory = false);
        count2 != 0 ? (this.isClothing = true) : (this.isClothing = false);
      }
    });
  }
}

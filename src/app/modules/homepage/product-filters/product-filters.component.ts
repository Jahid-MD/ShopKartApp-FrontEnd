import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data-service.service';
@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss'],
})
export class ProductFiltersComponent implements OnInit {
  fashion: string;
  filterForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.filterForm = this.formBuilder.group({
      fashion: ['All'],
      isCatClothing: [''],
      isCatAccessories: [''],
      isCatAll: [true],
      minPrice: ['', Validators.min(0)],
      maxPrice: ['Infinity', Validators.max(Infinity)],
    });
  }

  ngOnInit(): void {
    this.dataService.getintialProductData();
    this.filterForm.valueChanges.subscribe(() => {
      this.submitFilterData();
    });
  }
  submitFilterData() {
    console.log(this.filterForm.value);
    this.dataService.getProductData(this.filterForm.value);
  }
}

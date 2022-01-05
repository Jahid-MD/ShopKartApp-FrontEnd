import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-service.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private http: HttpClient,
    private snackBarService: SnackbarService
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      photo: ['./fbf/fgfdg.png', [Validators.required]],
      brand: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isAccessory: ['', [Validators.required]],
      isMenFashion: ['', [Validators.required]],
      price: [
        '',
        [Validators.required, Validators.min(1), Validators.max(Infinity)],
      ],
    });
  }

  ngOnInit(): void {
    if (!this.dataService.isAdmin) {
      this.router.navigate(['./']);
    }
  }
  submit() {
    console.log(this.productForm);
    this.http
      .post('/api/addProduct', { data: this.productForm.value })
      .subscribe();
    this.productForm.reset({
      name: [''],
      photo: ['./fbf/fgfdg.png'],
      brand: [''],
      description: [''],
      isAccessory: [''],
      isMenFashion: [''],
      price: [''],
    });
    this.snackBarService.openSnackBar();
  }
  display() {
    console.log(this.productForm.valid);
  }
}

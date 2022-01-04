import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder) {
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

  ngOnInit(): void {}
  submit() {
    console.log(this.productForm);
  }
  display() {
    console.log(this.productForm.valid);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartpageRoutingModule } from './cartpage-routing.module';
import { CartpageComponent } from './cartpage.component';


@NgModule({
  declarations: [
    CartpageComponent
  ],
  imports: [
    CommonModule,
    CartpageRoutingModule
  ]
})
export class CartpageModule { }

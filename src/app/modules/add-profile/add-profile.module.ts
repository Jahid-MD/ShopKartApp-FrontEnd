import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProfileRoutingModule } from './add-profile-routing.module';
import { AddProfileComponent } from './add-profile.component';


@NgModule({
  declarations: [
    AddProfileComponent
  ],
  imports: [
    CommonModule,
    AddProfileRoutingModule
  ]
})
export class AddProfileModule { }

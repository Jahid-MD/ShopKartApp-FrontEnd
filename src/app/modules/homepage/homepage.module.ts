import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomepageComponent,
    ProductContainerComponent,
    ProductFiltersComponent,
  ],
  imports: [CommonModule, MaterialModule, HomepageRoutingModule, FormsModule],
})
export class HomepageModule {}

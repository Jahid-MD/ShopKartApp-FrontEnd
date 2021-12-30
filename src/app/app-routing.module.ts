import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ' ',
    loadChildren: () =>
      import('./modules/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/cartpage/cartpage.module').then(
        (m) => m.CartpageModule
      ),
  },
  {
    path: 'addProduct',
    loadChildren: () =>
      import('./modules/add-product/add-product.module').then(
        (m) => m.AddProductModule
      ),
  },
  {
    path: 'addProfile',
    loadChildren: () =>
      import('./modules/add-profile/add-profile.module').then(
        (m) => m.AddProfileModule
      ),
  },
  {
    path: 'confirm',
    loadChildren: () =>
      import('./modules/confirmation-page/confirmation-page.module').then(
        (m) => m.ConfirmationPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

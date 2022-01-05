import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { CartpageComponent } from './cartpage.component';

const routes: Routes = [
  { path: '', component: CartpageComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartpageRoutingModule {}

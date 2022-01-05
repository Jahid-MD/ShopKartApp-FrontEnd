import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { AddProductComponent } from './add-product.component';
import { AuthService } from 'src/app/service/auth.service';
const routes: Routes = [
  { path: '', component: AddProductComponent, canActivate: [AuthService] },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductRoutingModule {}

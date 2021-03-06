import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { AddProfileComponent } from './add-profile.component';

const routes: Routes = [{ path: '', component: AddProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProfileRoutingModule {}

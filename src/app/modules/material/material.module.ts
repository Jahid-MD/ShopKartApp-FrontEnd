import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

const MarterialComponents = [MatRadioModule, MatCheckboxModule, MatInputModule];
@NgModule({
  declarations: [],
  imports: [MarterialComponents],
  exports: [MarterialComponents],
})
export class MaterialModule {}

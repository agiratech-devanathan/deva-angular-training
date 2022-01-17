import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const materialComponent = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];
@NgModule({

  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule { }

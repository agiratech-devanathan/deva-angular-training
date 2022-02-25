import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileFormatDirective } from './mobile-format.directive';



@NgModule({
  declarations: [MobileFormatDirective],
  exports: [
    CommonModule,
    MobileFormatDirective
  ]
})
export class DirectivesModule { }

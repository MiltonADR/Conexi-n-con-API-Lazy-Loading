import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadComponent } from './bread.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BreadComponent],
  exports: [BreadComponent],
})
export class BreadModule {}

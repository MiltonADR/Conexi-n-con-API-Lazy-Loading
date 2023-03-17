import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { BreadModule } from '../../shared/bread/bread.module';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../../shared/footer/footer.module';

const routes: Routes = [{ path: '', component: LocationComponent }];

@NgModule({
  imports: [
    CommonModule,
    BreadModule,
    FooterModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LocationComponent],
  exports: [RouterModule],
})
export class LocationModule {}

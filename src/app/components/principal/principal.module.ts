import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { BreadModule } from '../../shared/bread/bread.module';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../../shared/footer/footer.module';

const routes: Routes = [{ path: '', component: PrincipalComponent }];

@NgModule({
  imports: [
    CommonModule,
    BreadModule,
    FooterModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PrincipalComponent],
  exports: [RouterModule],
})
export class PrincipalModule {}

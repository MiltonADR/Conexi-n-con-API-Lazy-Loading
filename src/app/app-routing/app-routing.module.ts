import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../components/principal/principal.module').then(
            (m) => m.PrincipalModule
          ),
      },
      {
        path: 'location',
        loadChildren: () =>
          import('../components/location/location.module').then(
            (m) => m.LocationModule
          ),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}

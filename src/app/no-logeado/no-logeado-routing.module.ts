import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoLogeadoPage } from './no-logeado.page';

const routes: Routes = [
  {
    path: '',
    component: NoLogeadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoLogeadoPageRoutingModule {}

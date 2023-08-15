import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'logeado',
    loadChildren: () => import('./logeado/logeado.module').then( m => m.LogeadoPageModule)
  },
  {
    path: 'no-logeado',
    loadChildren: () => import('./no-logeado/no-logeado.module').then( m => m.NoLogeadoPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
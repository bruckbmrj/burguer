import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'bebidas', component: BebidasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

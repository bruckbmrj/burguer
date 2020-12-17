import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { LanchesComponent } from './pages/lanches/lanches.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent
  },
  { path: 'bebidas',
    component: BebidasComponent
  },
  { path: 'lanches',
    component: LanchesComponent
  },
  { path: 'contato',
    component: ContatoComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

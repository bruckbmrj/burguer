import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';
import { DrinksModule } from './pages/drinks/drinks.module';
import { ProductsService } from './services/products.service';
import { ProductGenericListComponent } from './shared/product-generic-list/product-generic-list.component';
import { ModalGenericComponent } from './shared/modal-generic/modal-generic.component';
import { FoodsModule } from './pages/foods/foods.module';
import { ContactModule } from './pages/contact/contato.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductGenericListComponent,
    ModalGenericComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DrinksModule,
    FoodsModule,
    ContactModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

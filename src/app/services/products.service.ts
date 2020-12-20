import { Injectable } from '@angular/core';
import { Products } from '../model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Products[] = [
    { id: 1,
      marca: 'La Vosier',
      categoria: 'Lanches',
      nome: 'Super Hamburguer',
      descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      preco: 20.00
    },
    { id: 2,
      marca: 'La Vosier',
      categoria: 'Bebidas',
      nome: 'Cubanaca',
      descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      preco: 20.00
    },
    { id: 3,
      marca: 'Carolina Herrera',
      categoria: 'Bebidas',
      nome: 'Amanhecer',
      descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      preco: 25.00
    }



  ];

  constructor() { }

  getProducts(){
    return this.products;
  }
}

import { Injectable } from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './my-products'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // getProducts(): Product[]{
  //   return PRODUCTS;
  // }

  getProducts(): Observable<Product[]>{
    return of(PRODUCTS)
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './my-products'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // getProducts(): Product[]{
  //   return PRODUCTS;
  // }

  getProducts(): Observable<Product[]>{
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS)
  }

  constructor(private messageService: MessageService) { }
}

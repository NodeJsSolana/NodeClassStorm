import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import {ProductService} from '../product.service'
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // products = PRODUCTS;
  selectedProduct !: Product;

  products !: Product[];


  constructor(private productService: ProductService,
    private messageService: MessageService) {

   }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product : Product) : void {
    this.selectedProduct = product;
    this.messageService.add(`Name : ${product.name}`);
    this.messageService.add(`Price : ${product.price}`);
    this.messageService.add(`Description : ${product.description}`);
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products)
  }

}

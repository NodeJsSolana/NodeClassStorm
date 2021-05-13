import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import {ProductService} from '../product.service'
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // products = PRODUCTS;
  selectedProduct !: Product;

  products !: Product[];


  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product : Product) : void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products)
  }

}

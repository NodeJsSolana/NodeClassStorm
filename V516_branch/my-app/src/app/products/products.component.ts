import { Component, OnInit } from '@angular/core';

import {Product, PRODUCTS} from '../product'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products !: Product[];
  selectedProduct!:Product
  constructor() {
    this.products = PRODUCTS;
   }

  ngOnInit(): void {
  }

  selectedItem(product:Product):void{
    this.selectedProduct= product;
 }

}

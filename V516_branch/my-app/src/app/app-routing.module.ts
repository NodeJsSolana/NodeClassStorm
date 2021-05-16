import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkDetailComponent } from './park-detail/park-detail.component';
import { ParksComponent } from './parks/parks.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'parks', component: ParksComponent },
  { path: 'parkDetail/:id', component: ParkDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

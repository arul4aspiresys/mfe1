import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductsComponent } from './view-products/view-products.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'view',
    component: ViewProductsComponent,
  }
];

@NgModule({
  declarations: [
    ViewProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }

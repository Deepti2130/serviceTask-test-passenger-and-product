import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from '../product-dashboard/product-dashboard.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material/material.module';



@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductFormComponent,
    ProductCardComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports:[
    ProductDashboardComponent
  ]
})
export class ProductsModule {
  constructor (){
    console.log('product module loaded')
  }
}

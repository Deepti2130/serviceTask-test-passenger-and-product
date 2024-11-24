import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../model/products';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productsArr! :Array<Iproduct>
  constructor(
    private _productService:ProductService
  ) { }

  ngOnInit(): void {
     this.productsArr = this._productService.fetchAllprodut()
  }

}

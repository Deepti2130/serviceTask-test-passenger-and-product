import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, productstatus } from '../../model/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input() Productobj! :Iproduct;
//It is public property
productstatus = productstatus
  constructor(
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
  }


  onstatusChange(updatedstatus:productstatus){
  this._productService.updateStatus(updatedstatus,this.Productobj.pid)

  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { productstatus } from '../../model/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
@ViewChild('productForm') productForm! : NgForm

  constructor(
    private _productService:ProductService,
    private _uuidservice:UuidService
  ) { }

  ngOnInit(): void {
  }

  onAddproduct(){
   if(this.productForm.valid){
   let prodobj = {...this.productForm.value,
    pid:this._uuidservice.generateUuid(),
    pstatus:productstatus.Inprogress
   }
   this._productService.createNewproduct(prodobj);
   this.productForm.reset()
   }

  }

}

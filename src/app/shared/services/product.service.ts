import { Injectable } from '@angular/core';
import { Iproduct, productstatus } from '../model/products';
import { SnackBarService } from './snack-bar.service';
import { Ipassenger } from '../model/passenger';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsArr:Array<Iproduct> = [
    {
      pname: "Samsung 31",
      pdetails: "Android smartphone. Announced Mar 2020. Features 6.4″ display, MT6768 Helio P65 chipset, 5000 mAh battery, 128 GB storage, 8 GB RAM.",
      pid: "123",
      pstatus: productstatus.Inprogress
    },
    {
      pname: "Samsung 32",
      pdetails: "Android smartphone. Announced Mar 2020. Features 6.4″ display, MT6768 Helio P65 chipset, 5000 mAh battery, 128 GB storage, 8 GB RAM.",
      pid: "124",
      pstatus: productstatus.Dispatched
    },
    {
      pname: "Samsung 33",
      pdetails: "Android smartphone. Announced Mar 2020. Features 6.4″ display, MT6768 Helio P65 chipset, 5000 mAh battery, 128 GB storage, 8 GB RAM.",
      pid: "125",
      pstatus: productstatus.Delivered
    }
  ]
  constructor(
    private _snackBar : SnackBarService
  ) { }


  fetchAllprodut():Array<Iproduct>{
    //API call to get all product
    return this.productsArr
  }

  updateStatus(updatedstatus:productstatus, pid:string){
    //API call to update status of product

    let getIndex = this.productsArr.findIndex(prod => prod.pid === pid);
    console.log(getIndex)

    this.productsArr[getIndex].pstatus = updatedstatus

    //msg
    this._snackBar.opensnackBar(`The product status is updated as ${updatedstatus}`)
  }

  createNewproduct(prodobj:Iproduct){
  this.productsArr.push(prodobj)

  //msg
  this._snackBar.opensnackBar(`The new product ${prodobj.pname} is added successfully`)
  }


}

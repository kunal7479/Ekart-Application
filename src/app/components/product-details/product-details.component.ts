import { Component, Input, OnInit } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

@Input()  productlistcomp : ProductlistComponent = undefined;

product : Product;

ngOnInit(): void{
  this.product = this.productlistcomp.selectedprod;
  }


}

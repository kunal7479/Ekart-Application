import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  @Input()
  searchtext:string = " ";
  
  selectedprod:Product;

  

  product = [{
    id: 1,
    name: "Iphone 15",
    image: "/assets/images.jpg",
    brand: "Apple",
    price: 58000,
    gender: "male",
    category: "Mobile",
    color: "Blue",
    discountprice:1400,
    productavailability:true,
    discount:true
  }
    ,
  {

    id: 2,
    name: "Iphone 15 Pro",
    image: "assets/images.jpg",
    brand: "Apple",
    price: 58000,
    gender: "male",
    category: "Mobile",
    color: "Grey",
    discountprice:1400,
    productavailability:false,
    discount:true
  }
    ,
  {

    id: 3,
    name: "Iphone",
    image: "/assets/images.jpg",
    brand: "Apple",
    price: 58000,
    gender: "male",
    category: "Mobile",
    color: "Blue",
    discountprice:25000,
    productavailability:true,
    discount:true
  },
  {
    id: 4,
    name: "Iphone 14 Pro Max",
    image: "/assets/images.jpg",
    brand: "Apple",
    price: 58000,
    gender: "male",
    category: "Mobile",
    color: "Blue",
    discountprice:1200,
    productavailability:false,
    discount:true
  },
  {

    id: 5,
    name: "Iphone",
    image: "/assets/images.jpg",
    brand: "Nike",
    price: 58000,
    gender: "male",
    category: "shoes",
    color: "Blue",
    discountprice:3400,
    productavailability:true,
    discount:true
  },
  {

    id: 6,
    name: "Iphone",
    image: "/assets/images.jpg",
    brand: "Apple",
    price: 58000,
    gender: "male",
    category: "Mobile",
    color: "Blue",
    discountprice:3900,
    productavailability:true,
    discount:true
  },
  {

    id: 7,
    name: "Sneakers",
    image: "/assets/images.jpg",
    brand: "Nike",
    price: 10000,
    gender: "male",
    category: "Shoes",
    color: "GreenWhite",
    discountprice:3900,
    productavailability:true,
    discount:true,
  },
  {

    id: 8,
    name: "Sneakers",
    image: "/assets/shoes2.jpg",
    brand: "Nike",
    price: 5000,
    gender: "male",
    category: "Shoes",
    color: "GreyBlue",
    discountprice:10,
    productavailability:true,
    discount:true,
  }

  ]


  countofallproduct = this.product.length;
  countofallinstockproduct = this.product.filter(p => p.productavailability === true).length;
  countofalloutofstockproduct = this.product.filter(p => p.productavailability === false).length;

  selectedradiobutton : string= 'all';

  onfilterchange(value:string){
    console.log(value);
    this.selectedradiobutton = value;

  }

  
}



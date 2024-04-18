import { Component, Input, ViewChild } from '@angular/core';
import { ProductlistComponent } from './components/productlist/productlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eKartapp';


  searchText:string = "";

  @ViewChild(ProductlistComponent) productlistcomponent : ProductlistComponent

  searchtextfn(value:string){

    this.searchText=value;

  }


}

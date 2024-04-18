import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchtext:string = "";

  //This is used for @output custom event binding
  // here we are creating event such that the "searchtext" value can be accessed in components ts file
  //this is child component and we sending value of searchtext to parent component(components)
  @Output()
  searchtextchanged:EventEmitter<string> = new EventEmitter<string>();


  // onchangesearchtext(){
  //   // console.log(this.searchtext);
  // }

  updatesearchtext(Input : HTMLInputElement){
    this.searchtext = Input.value;
    //after inserting value we will emit the event
    this.searchtextchanged.emit(this.searchtext);
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all : number=0;
  @Input()
  instock : number=0;
  @Input()
  outofstock: number=0;

  @Output()
  radiobuttonevent:EventEmitter<string> = new EventEmitter<string>();

  selectedradiobutton : string= 'all';

  onchangeradiobtn(){
  
    this.radiobuttonevent.emit(this.selectedradiobutton);
  }

}

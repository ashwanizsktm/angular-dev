import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  theItem = [];
   tempArr = [];
  @Output() childMsg = new EventEmitter();

  @Input() set items(item) {
    // console.log(item);
    this.tempArr = item;
    this.theItem = this.tempArr.concat(" hey there")
    
    // itemsArr.filter(item => item != 'item 3')
    
    // this.theItem = itemsArr;
    
    // this.theItem = item;
    // let filteredData = [];
    // this.
    // this.theItem.filter((item) => {
  }

  constructor() {}

  ngOnInit() {
    // console.log(this.items);
  }

  sendingData(value) {
    this.childMsg.emit(value.innerText);
  }
}

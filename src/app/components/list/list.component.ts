import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() entry: Object;
  @Output() public remove = new EventEmitter<Object>();
    constructor() { }
  
    ngOnInit() {}
  
    //child passes the info to the parent to remove the entry
    delete() {
      this.remove.emit(this.entry);
    }
  
  }

import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list: Object;
  @Output() delete = new EventEmitter<Object>();

  constructor() {}

  // emit the event to the parent
  deleteItem() {
    this.delete.emit(this.list);
  }
  ngOnInit() {}

}

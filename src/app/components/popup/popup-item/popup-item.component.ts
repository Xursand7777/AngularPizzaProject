import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PopupItem} from "../../../core/models/PopupItem";

@Component({
  selector: 'app-popup-item',
  templateUrl: './popup-item.component.html',
  styleUrls: ['./popup-item.component.css']
})
export class PopupItemComponent implements OnInit {
  @Input() items: PopupItem[] = [];
  @Input() selectedItem: number;
  @Output() onChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPopUp(index: number): void {
    this.onChange.emit(index);
  }

}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TabItem} from "../../core/models/TabItem";
import {defaultTabIndex} from "../../core/constants/filterTabs.const";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, OnChanges {
  @Input() items: TabItem[] = [];
  @Input() selectedItem: number;
  @Output() onChange = new EventEmitter();
  constructor() { }
  ngOnChanges(): void {
  console.log(this.items)
  }
  ngOnInit(): void {

  }


  public selectTab = (index:number): void => {
    this.onChange.emit(index)
  };

}

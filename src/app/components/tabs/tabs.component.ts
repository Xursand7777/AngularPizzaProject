import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabItem} from "../../core/models/TabItem";
import {defaultTabIndex} from "../../core/constants/filterTabs.const";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() items: TabItem[] = [];
  @Input() selectedItem: number = defaultTabIndex;
  @Output() onChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }


  public selectTab = (index: number): void => {
    this.onChange.emit(index)
  };

}

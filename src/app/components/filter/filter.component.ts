import { Component, OnInit } from '@angular/core';
import {TabItem} from "../../core/models/TabItem";
import {defaultTabIndex, filterTabs} from "../../core/constants/filterTabs.const";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
   public tabItems: TabItem[] = filterTabs;
   public selectedTab:number = defaultTabIndex;


  constructor() { }

  ngOnInit(): void {
  }

  handleTabItems(index: number): void {
    this.resetSelectedTab();
    this.tabItems.find((item) => item.index === index).active = true;
    this.selectedTab = index;
  }

  public resetSelectedTab = (): void => {
    this.tabItems.forEach((item) => item.active = false)
  }



}

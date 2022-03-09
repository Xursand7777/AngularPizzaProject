import { Component, OnInit } from '@angular/core';
import {TabItem} from "../../core/models/TabItem";
import {defaultTabIndex, filterTabs} from "../../core/constants/filterTabs.const";
import {PopupItem} from "../../core/models/PopupItem";
import {defaultPopup, filterPopUp} from "../../core/constants/Popup.const";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
   public tabItems: TabItem[] = filterTabs;
   public selectedTab:number = defaultTabIndex;
   public popUpItems: PopupItem[] = filterPopUp;
   public selectedPopUp: number = defaultPopup;


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

  handlePopUp(index: number): void {
    this.resetSelectedPopUp();
    this.popUpItems.find((item) => item.index === index).active = true;
    this.selectedPopUp = index;
  }

  public resetSelectedPopUp = (): void => {
    this.popUpItems.forEach((item) => item.active = false);
  }

}

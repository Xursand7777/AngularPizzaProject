import { Component, OnInit } from '@angular/core';
import {TabItem} from "../../core/models/TabItem";
import {filterTabs} from "../../core/constants/filterTabs.const";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
   public tabItems: TabItem[] = filterTabs;


  constructor() { }

  ngOnInit(): void {
  }

  handleTabItems(index: number): void {
    this.tabItems.find((item) => item.index === index).active = true
  }
}

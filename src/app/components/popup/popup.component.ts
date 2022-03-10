import {Component,  OnInit} from '@angular/core';
import {PopupItem} from "../../core/models/PopupItem";
import {defaultPopup, filterPopUp} from "../../core/constants/Popup.const";


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  public popUpItems: PopupItem[] = filterPopUp;
  public selectedPopUp: number = defaultPopup;
  constructor() { }

  ngOnInit(): void {
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

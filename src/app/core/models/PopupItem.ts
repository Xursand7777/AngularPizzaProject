export class PopupItem {
  public title: string;
  public index: number;
  public active: boolean;

  constructor(initializer?:PopupItem) {
    if(initializer){
      this.title = initializer.title;
      this.index = initializer.index;
      this.active = initializer.active;
    }
  }
}

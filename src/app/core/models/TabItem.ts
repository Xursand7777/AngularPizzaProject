export class TabItem {
  public index: number;
  public title: string;
  public count: number;
  public active: boolean;

  constructor(initializer?: TabItem) {
    if(initializer){
      this.index = initializer.index;
      this.count = initializer.count;
      this.active = initializer.active;
      this.title = initializer.title;
    }
  }
}

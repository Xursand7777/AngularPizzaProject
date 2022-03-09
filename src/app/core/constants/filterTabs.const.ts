import {TabItem} from "../models/TabItem";
export const defaultTabIndex = 1;
export const filterTabs: TabItem[] = [
  {
    index: defaultTabIndex,
    title: 'Все',
    count: null,
    active: true,
  },
  {
    index: 2,
    title: 'Мясные',
    count: null,
    active: false,
  },
  {
    index: 3,
    title: 'Вегетерианская',
    count: null,
    active: false,
  },
  {
    index: 4,
    title: 'Гриль',
    count: null,
    active: false,
  },
  {
    index: 4,
    title: 'Острые',
    count: null,
    active: false,
  },
  {
    index: 4,
    title: 'Закрытые',
    count: null,
    active: false,
  }
]

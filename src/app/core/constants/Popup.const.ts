import {PopupItem} from '../models/PopupItem';

export const defaultPopup = 0;

export const filterPopUp: PopupItem[] = [
  {
    index: defaultPopup,
    title: 'популярности',
    active: true,
  },
  {
    index: 1,
    title: 'цене',
    active: false,
  },
  {
    index: 2,
    title: 'алфавиту',
    active: false,
  }
]

export interface IItemsListUIProps {
  data: any;
  visitedItems: any;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (el: any) => () => void;
  loadFunc: () => void;
}

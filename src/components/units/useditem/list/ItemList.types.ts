export interface IItemsListUIProps {
  data: any;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (el: any) => () => void;
  visitedItems: any;
  loadFunc: () => void;
}

export interface IItemsListUIProps {
  data: any;
  visitedItems: any;
  isSoldout: string;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (el: any) => () => void;
  loadFunc: () => void;
  onChangeIsSoldout: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

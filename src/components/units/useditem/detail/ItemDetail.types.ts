export interface IItemDetailProps {
  data?: any;
  createDate: string;
  userData?: any;
  isPicked: boolean;
  onClickGoToList: () => void;
  onClickDeleteButton: () => void;
  onClickUpdateButton: () => void;
  onClickPick: () => void;
  onClickBuy: () => void;
}

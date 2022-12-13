export interface IItemMypageUIProps {
  onChangePrice: (event: any) => void;
  onChangeBuySell: (event: any) => void;
  loadFunc: () => void;
  onClickMoveToDetail: (el: any) => () => void;
  requestPay: any;
  userData: any;
  pickedData: any;
  buySell: String;
}

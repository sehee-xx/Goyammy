import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IItemMypageUIProps {
  onChangePrice: (event: any) => void;
  onChangeBuySell: (event: any) => void;
  loadFunc: () => void;
  onClickMoveToDetail: (el: any) => () => void;
  refetchUseditemsIBought: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  refetchUseditemsISold: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  requestPay: any;
  userData: any;
  pickedData: any;
  buySell: String;
  boughtData: any;
  boughtCount: number;
  soldData: any;
  soldCount: number;
}

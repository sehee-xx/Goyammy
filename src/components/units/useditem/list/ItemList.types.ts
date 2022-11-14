import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IItemsListUIProps {
  data: any;
  visitedItems: any;
  dataUseditemsBest: any;
  isSoldout: string;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (el: any) => () => void;
  refetchUseditemsBest: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  loadFunc: () => void;
  onChangeIsSoldout: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

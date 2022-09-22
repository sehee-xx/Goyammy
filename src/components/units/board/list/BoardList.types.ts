import { ChangeEvent } from "react";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IBoardListUIProps {
  data: any;
  onClickDelete: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickWriteBoard: () => void;
  onClickMoveToBoardDetail: (event: any) => void;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  count?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}

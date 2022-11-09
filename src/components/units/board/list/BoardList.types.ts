import { ChangeEvent } from "react";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IBoardListUIProps {
  data: any;
  dataBoardsBest: any;
  count?: number;
  keyword: string;
  onClickDelete: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickWriteBoard: () => void;
  onClickMoveToBoardDetail: (event: any) => void;
  onClickMoveToBest: (event: any) => void;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  refetchBoardsBest: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}

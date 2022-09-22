import { ChangeEvent } from "react";

export interface ISearchbars01Props {
  refetch: (
    variables: Partial<any>
  ) => Promise<any>
  refetchBoardsCount: (
    variables: Partial<any>
  ) => Promise<any>
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars01UIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
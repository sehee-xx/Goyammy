import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";

export interface IPaginations03Props {
  count?: number;
  refetch: (
    variables: Partial<IQueryFetchUseditemsISoldArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;
}

export interface IPaginations03UIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export interface IPageProps {
  isActive?: boolean;
}

import { ChangeEvent } from "react";

export interface ISearchbars02Props {
  refetch: (variables: Partial<any>) => Promise<any>;
}

export interface ISearchbars02UIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
}

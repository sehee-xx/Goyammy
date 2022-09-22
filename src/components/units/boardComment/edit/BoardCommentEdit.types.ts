import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardCommentWriteUIProps {
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdate: () => void;
  setStar: Dispatch<SetStateAction<number>>;
  password: string;
  star: number;
  editContents: string;
  el: any;
}

export interface IBoardCommentEditProps {
  el: any;
  setCommentEditId: Dispatch<SetStateAction<string>>;
}

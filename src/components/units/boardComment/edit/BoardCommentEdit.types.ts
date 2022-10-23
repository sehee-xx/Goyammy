import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardCommentWriteUIProps {
  password: string;
  star: number;
  editContents: string;
  el: any;
  onClickUpdate: () => void;
  onClickCancel: () => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  setStar: Dispatch<SetStateAction<number>>;
}

export interface IBoardCommentEditProps {
  el: any;
  setCommentEditId: Dispatch<SetStateAction<string>>;
}

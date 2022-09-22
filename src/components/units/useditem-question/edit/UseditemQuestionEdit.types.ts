import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IUseditemQuestionWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdate: () => void;
  editContents: string;
  el: any;
}

export interface IUseditemQuestionEditProps {
  el: any;
  setCommentEditId: Dispatch<SetStateAction<string>>;
}

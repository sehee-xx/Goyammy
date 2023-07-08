import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IUseditemQuestionWriteUIProps {
  editContents: string;
  el: any;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCancel: () => void;
  onClickUpdate: () => void;
}

export interface IUseditemQuestionEditProps {
  el: any;
  setCommentEditId: Dispatch<SetStateAction<string>>;
}

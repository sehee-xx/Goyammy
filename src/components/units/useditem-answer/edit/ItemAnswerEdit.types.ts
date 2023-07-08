import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IUseditemAnswerWriteUIProps {
  editContents: string;
  el: any;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdate: () => void;
  onClickCancel: () => void;
}

export interface IUseditemAnswerEditProps {
  el: any;
  setCommentEditId: Dispatch<SetStateAction<string>>;
}

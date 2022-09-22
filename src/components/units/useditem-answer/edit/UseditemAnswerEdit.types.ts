import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IUseditemAnswerWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdate: () => void;
  editContents: string;
  el: any;
}

export interface IUseditemAnswerEditProps {
  el: any;
  setCommentEditId: Dispatch<SetStateAction<string>>;
}

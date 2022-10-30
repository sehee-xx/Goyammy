import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IUseditemAnswerWriteUIProps {
  contents: string;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  onClickCancel: () => void;
}

export interface IUseditemAnswerWriteProps {
  useditemQuestionId: string;
  setCommentQnAId: Dispatch<SetStateAction<string>>;
}

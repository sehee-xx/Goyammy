import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IUseditemAnswerWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  contents: string;
}

export interface IUseditemAnswerWriteProps {
  useditemQuestionId: string;
  setCommentQnAId: Dispatch<SetStateAction<string>>;
}

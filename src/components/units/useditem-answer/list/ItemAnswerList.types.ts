import { Dispatch, SetStateAction } from "react";

export interface IUseditemAnswerListUIProps {
  data?: any;
  onClickDelete: (event: any) => void;
  loadFunc: () => void;
  onClickEditIcon: (event: any) => void;
  commentEditId: string;
  setCommentEditId: Dispatch<SetStateAction<string>>;
  userData?: any;
}

export interface IUseditemAnswerListProps {
  useditemQuestionId: string;
}

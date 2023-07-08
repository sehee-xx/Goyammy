import { Dispatch, SetStateAction } from "react";

export interface IUseditemQuestionListUIProps {
  data?: any;
  userData?: any;
  commentEditId: string;
  commentQnAId: string;
  onClickDelete: (event: any) => void;
  loadFunc: () => void;
  onClickEditIcon: (event: any) => void;
  setCommentEditId: Dispatch<SetStateAction<string>>;
  setCommentQnAId: Dispatch<SetStateAction<string>>;
  onClickQnA: (event: any) => void;
}

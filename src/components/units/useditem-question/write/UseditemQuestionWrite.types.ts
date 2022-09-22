import { ChangeEvent } from "react";

export interface IUseditemQuestionWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  contents: string;
}

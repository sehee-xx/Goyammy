import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardCommentListUIProps {
  data?: any;
  onClickDelete: (event: any) => void;
  isModalVisible: boolean;
  onToggleModal: () => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteIcon: (event: any) => void;
  loadFunc: () => void;
  onClickEditIcon: (event: any) => void;
  commentDeleteId: string;
  commentEditId: string;
  setCommentEditId: Dispatch<SetStateAction<string>>
}

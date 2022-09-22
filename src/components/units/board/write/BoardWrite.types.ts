import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  boardData?: any;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  checkButton: boolean;
  onClickEdit: () => void;
  isEdit: boolean;
  boardData?: any;
  onToggleModal: () => void;
  handleComplete: (data: any) => void;
  isModalVisible: boolean;
  address: string;
  zipcode: string;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFiles: (index: number, url: string) => void;
  fileUrls: any;
}

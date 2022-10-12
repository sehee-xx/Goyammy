import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  boardData?: any;
}

export interface IData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  addressDetail: string;
  youtubeUrl: string;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  boardData?: any;
  register: any;
  handleSubmit: any;
  formState: any;
  isModalVisible: boolean;
  address: string;
  zipcode: string;
  fileUrls: any;
  onChangeContents: (value: string) => void;
  onClickSubmit: (data: IData) => Promise<void>;
  onClickEdit: (data: IData) => Promise<void>;
  onToggleModal: () => void;
  handleComplete: (data: any) => void;
  onChangeFiles: (index: number, url: string) => void;
}

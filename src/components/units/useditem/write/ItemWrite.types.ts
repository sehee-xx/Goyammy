import { Dispatch, SetStateAction } from "react";

export interface IItemWriteProps {
  isEdit: boolean;
  itemData?: any;
}

export interface IData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  lat?: number;
  lng?: number;
  address?: string;
  addressDetail?: string;
  zipcode: string;
}

export interface ItemWriteUIProps {
  isEdit: boolean;
  itemData?: any;
  register: any;
  handleSubmit: any;
  formState: any;
  fileUrls: any;
  tags: string[];
  setTags: any;
  isModalVisible: boolean;
  address: string;
  setLatLng: Dispatch<SetStateAction<never[]>>;
  onClickSubmit: (data: any) => void;
  onClickEdit: (data: any) => void;
  onChangeContents: (value: string) => void;
  onChangeFiles: (index: number, url: string) => void;
  onToggleModal: () => void;
  handleComplete: (data: any) => void;
}

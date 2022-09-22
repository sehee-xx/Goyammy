export interface IItemWriteProps {
  isEdit: boolean;
  itemData?: any;
}

export interface ItemWriteUIProps {
  isEdit: boolean;
  itemData?: any;
  register: any;
  handleSubmit: any;
  formState: any;
  onClickSubmit: (data: any) => void;
  onClickEdit: (data: any) => void;
  onChangeContents: (value: string) => void;
  onChangeFiles: (index: number, url: string) => void;
  fileUrls: any;
  onChangeLocation: (la: number, ma: number, address: string) => void;
}

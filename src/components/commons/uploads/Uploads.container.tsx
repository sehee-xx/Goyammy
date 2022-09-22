import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { checkFileValidation } from "../../../commons/libraries/fileValidation";
import Uploads01UI from "./Uploads.presenter";
import { UPLOAD_FILE } from "./Uploads.queries";
import { IUploads01Props } from "./Uploads.types";

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0];
    if (!checkFileValidation(file)) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFiles(props.index, result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrls[props.index]}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}

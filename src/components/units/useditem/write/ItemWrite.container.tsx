import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ItemWriteUI from "./ItemWrite.presenter";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./ItemWrite.queries";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { IItemWriteProps } from "./ItemWrite.types";

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  remarks: yup.string().required("한줄 요약은 필수 입력 사항입니다."),
  contents: yup.string().required("상품 설명은 필수 입력 사항입니다."),
  price: yup.number().required("가격은 필수 입력 사항입니다."),
});

export default function ItemWrite(props: IItemWriteProps) {
  const router = useRouter();

  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [fileUrls, setFileUrls] = useState<string[]>([]);

  useEffect(() => {
    setFileUrls(props.itemData?.fetchUseditem?.images || []);
    onChangeContents(props.itemData?.fetchUseditem.contents);
  }, [props.itemData]);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeLocation = (lat: number, lng: number, address: string) => {
    setValue("lat", lat);
    setValue("lng", lng);
    setValue("address", address);
    trigger("lat");
    trigger("lng");
    trigger("address");
  };
  const onClickEdit = async (data: any) => {
    if (typeof data.lat === "string") data.lat = undefined;
    if (typeof data.lng === "string") data.lng = undefined;
    try {
      const updateUseditemInput: any = {};

      if (data.name) updateUseditemInput.name = data.name;
      if (data.remarks) updateUseditemInput.remarks = data.remarks;
      if (data.contents) updateUseditemInput.contents = data.contents;
      if (data.price) updateUseditemInput.price = data.price;
      if (fileUrls) updateUseditemInput.images = fileUrls;
      if (data.lat || data.lng || data.address || data.addressDetail) {
        updateUseditemInput.useditemAddress = {};
        if (data.lat) updateUseditemInput.useditemAddress.lat = data.lat;
        if (data.lng) updateUseditemInput.useditemAddress.lng = data.lng;
        if (data.address)
          updateUseditemInput.useditemAddress.address = data.address;
        if (data.addressDetail)
          updateUseditemInput.useditemAddress.addressDetail =
            data.addressDetail;
      }

      const result = await updateUseditem({
        variables: {
          updateUseditemInput,
          useditemId: router.query.useditemId,
        },
      });

      console.log(result);
      Modal.success({
        content: "😽 상품이 수정되었습니다 😽",
        onOk() {
          router.push(`/markets/${router.query.useditemId}`);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "😿 상품 수정에 실패했습니다 😿",
        content: error.message,
      });
    }
  };

  interface IData {
    name: string;
    remarks: string;
    contents: string;
    price: number;
    lat?: number;
    lng?: number;
    address?: string;
    addressDetail?: string;
  }

  const onClickSubmit = async (data: IData) => {
    if (typeof data.lat === "string") data.lat = undefined;
    if (typeof data.lng === "string") data.lng = undefined;
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            // tags: data.tags,
            images: fileUrls,
            useditemAddress: {
              lat: data.lat,
              lng: data.lng,
              address: data.address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      Modal.success({
        content: "😽 상품이 등록되었습니다 😽",
        onOk() {
          router.push(`/markets/${result.data.createUseditem._id}`);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "😿 상품 등록에 실패했습니다 😿",
        content: error.message,
      });
    }
  };

  function onChangeFiles(index: number, url: string) {
    const newFileUrls = [...fileUrls];
    if (fileUrls[index]) {
      newFileUrls[index] = url;
    } else {
      newFileUrls.push(url);
    }
    setFileUrls([...newFileUrls]);
  }
  return (
    <ItemWriteUI
      isEdit={props.isEdit}
      itemData={props.itemData}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onChangeContents={onChangeContents}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
      onChangeLocation={onChangeLocation}
    />
  );
}

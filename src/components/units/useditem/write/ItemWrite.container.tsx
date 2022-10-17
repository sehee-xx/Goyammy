import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ItemWriteUI from "./ItemWrite.presenter";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./ItemWrite.queries";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { IData, IItemWriteProps } from "./ItemWrite.types";

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
  const [tags, setTags] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [latLng, setLatLng] = useState([]);
  const [address, setAddress] = useState("");

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setValue("zipcode", data.zonecode);
    setValue("address", data.address);
    trigger("zipcode");
    trigger("address");
    setAddress(data.address);
    onToggleModal();
  };

  useEffect(() => {
    setTags(props.itemData?.fetchUseditem.tags);
    setAddress(props.itemData?.fetchUseditem.useditemAddress.address);
    setFileUrls(props.itemData?.fetchUseditem?.images || []);
    onChangeContents(props.itemData?.fetchUseditem.contents);
  }, [props.itemData]);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickEdit = async (data: any) => {
    try {
      const updateUseditemInput: any = {};

      if (data.name) updateUseditemInput.name = data.name;
      if (data.remarks) updateUseditemInput.remarks = data.remarks;
      if (data.contents) updateUseditemInput.contents = data.contents;
      if (data.price) updateUseditemInput.price = data.price;
      if (tags) updateUseditemInput.tags = tags;
      if (fileUrls) updateUseditemInput.images = fileUrls;
      if (
        latLng[0] ||
        latLng[1] ||
        data.address ||
        data.addressDetail ||
        data.zipcode
      ) {
        updateUseditemInput.useditemAddress = {};
        if (latLng[0])
          updateUseditemInput.useditemAddress.lat = Number(latLng[0]);
        if (latLng[1])
          updateUseditemInput.useditemAddress.lng = Number(latLng[1]);
        if (data.address)
          updateUseditemInput.useditemAddress.address = data.address;
        if (data.addressDetail)
          updateUseditemInput.useditemAddress.addressDetail =
            data.addressDetail;
        if (data.zipcode)
          updateUseditemInput.useditemAddress.zipcode = data.zipcode;
      }

      const result = await updateUseditem({
        variables: {
          updateUseditemInput,
          useditemId: router.query.useditemId,
        },
      });

      Modal.success({
        content: "상품이 수정되었습니다.",
        onOk() {
          router.push(`/markets/${router.query.useditemId}`);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "상품 수정에 실패했습니다.",
        content: error.message,
      });
    }
  };

  const onClickSubmit = async (data: IData) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags,
            images: fileUrls,
            useditemAddress: {
              lat: Number(latLng[0]),
              lng: Number(latLng[1]),
              address: data.address,
              addressDetail: data.addressDetail,
              zipcode: data.zipcode,
            },
          },
        },
      });
      Modal.success({
        content: "상품이 등록되었습니다.",
        onOk() {
          router.push(`/markets/${result.data.createUseditem._id}`);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "상품 등록에 실패했습니다.",
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
      formState={formState}
      fileUrls={fileUrls}
      tags={tags}
      isModalVisible={isModalVisible}
      address={address}
      setLatLng={setLatLng}
      setTags={setTags}
      register={register}
      handleSubmit={handleSubmit}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onChangeContents={onChangeContents}
      onChangeFiles={onChangeFiles}
    />
  );
}

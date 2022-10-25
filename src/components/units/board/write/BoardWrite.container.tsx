import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IData } from "./BoardWrite.types";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  writer: yup.string().required("작성자는 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
  title: yup.string().required("제목은 필수 입력 사항입니다."),
  contents: yup.string().required("내용은 필수 입력 사항입니다."),
});

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [fileUrls, setFileUrls] = useState<string[]>([]);

  useEffect(() => {
    setFileUrls(props.boardData?.fetchBoard?.images || []);
  }, [props.boardData]);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    onToggleModal();
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

  const onClickEdit = async (data: IData) => {
    try {
      const updateBoardInput: any = {};

      if (data.title) updateBoardInput.title = data.title;
      if (data.contents) updateBoardInput.contents = data.contents;
      if (data.youtubeUrl) updateBoardInput.youtubeUrl = data.youtubeUrl;
      if (fileUrls) updateBoardInput.images = fileUrls;

      const result = await updateBoard({
        variables: {
          updateBoardInput,
          boardId: router.query.boardId,
          password: data.password,
        },
      });

      Modal.success({
        content: "게시글이 수정되었습니다.",
        onOk() {
          router.push(`/boards/${router.query.boardId}`);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "게시글 수정에 실패했습니다.",
        content: error.message,
      });
    }
  };

  const onClickSubmit = async (data: IData) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            images: fileUrls,
            boardAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      Modal.success({
        content: "게시글이 등록되었습니다.",
        onOk() {
          router.push(`/boards/${result.data.createBoard._id}`);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "게시글 등록에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <BoardWriteUI
      isEdit={props.isEdit}
      boardData={props.boardData}
      isModalVisible={isModalVisible}
      address={address}
      zipcode={zipcode}
      fileUrls={fileUrls}
      formState={formState}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      onChangeFiles={onChangeFiles}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}

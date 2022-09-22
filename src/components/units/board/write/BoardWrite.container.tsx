import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps } from "./BoardWrite.types";
import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [fileUrls, setFileUrls] = useState<string[]>([]);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  useEffect(() => {
    setFileUrls(props.boardData?.fetchBoard?.images || []);
  }, [props.boardData]);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    onToggleModal();
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
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

  const onClickEdit = async () => {
    try {
      const updateBoardInput: any = {};

      if (title) updateBoardInput.title = title;
      if (contents) updateBoardInput.contents = contents;
      if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
      if (fileUrls) updateBoardInput.images = fileUrls;

      const result = await updateBoard({
        variables: {
          updateBoardInput,
          boardId: router.query.boardId,
          password,
        },
      });

      console.log(result);
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

  const onClickSubmit = async () => {
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              images: fileUrls,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
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
    }
  };

  const checkButton = !(writer && password && title && contents);

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      checkButton={checkButton}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
      boardData={props.boardData}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      isModalVisible={isModalVisible}
      address={address}
      zipcode={zipcode}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
    />
  );
}

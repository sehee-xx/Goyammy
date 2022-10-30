import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import BoardCommentWriteUI from "./BoardCommentEdit.presenter";
import { UPDATE_BOARD_COMMENT } from "./BoardCommentEdit.queries";
import { Modal } from "antd";
import { IBoardCommentEditProps } from "./BoardCommentEdit.types";

export default function BoardCommentEdit(props: IBoardCommentEditProps) {
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  useEffect(() => {
    setContents(props.el.contents);
  }, [props.el.contents]);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickCancel = () => {
    props.setCommentEditId("");
  };

  const onClickUpdate = async () => {
    try {
      if (!password) {
        Modal.error({
          title: "비밀번호를 입력해주세요.",
        });
        return;
      }
      if (!contents) {
        Modal.error({
          title: "수정할 내용을 입력해주세요.",
        });
        return;
      }
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating: star,
          },
          password,
          boardCommentId: props.el._id,
        },
      });
      Modal.success({
        content: "댓글이 수정되었습니다.",
        onOk() {
          setPassword("");
          setContents("");
          setStar(0);
          props.setCommentEditId("");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "댓글 수정에 실패했습니다.",
        content: error.message,
      });
    }
  };
  return (
    <BoardCommentWriteUI
      editContents={contents}
      el={props.el}
      password={password}
      star={star}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
      setStar={setStar}
    />
  );
}

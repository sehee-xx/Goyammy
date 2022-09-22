import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import UseditemQuestionWriteUI from "./UseditemQuestionEdit.presenter";
import { UPDATE_USEDITEM_QUESTION } from "./UseditemQuestionEdit.queries";
import { Modal } from "antd";
import { IUseditemQuestionEditProps } from "./UseditemQuestionEdit.types";

export default function UseditemQuestionEdit(
  props: IUseditemQuestionEditProps
) {
  const [contents, setContents] = useState("");

  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickUpdate = async () => {
    try {
      if (!contents) {
        Modal.error({
          title: "수정할 내용을 입력해주세요.",
        });
        return;
      }
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents,
          },
          useditemQuestionId: props.el._id,
        },
      });
      Modal.success({
        content: "😽 댓글이 수정되었습니다! 😽",
        onOk() {
          setContents("");
          props.setCommentEditId("");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "😹 댓글 수정에 실패했습니다 😹",
        content: error.message,
      });
    }
  };
  return (
    <UseditemQuestionWriteUI
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      editContents={contents}
      el={props.el}
    />
  );
}

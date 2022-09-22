import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import UseditemAnswerWriteUI from "./UseditemAnswerEdit.presenter";
import { Modal } from "antd";
import { IUseditemAnswerEditProps } from "./UseditemAnswerEdit.types";
import { UPDATE_USEDITEM_QUESTION_ANSWER } from "./UseditemAnswerEdit.queries";

export default function UseditemAnswerEdit(props: IUseditemAnswerEditProps) {
  const [contents, setContents] = useState("");

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

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
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionAnswerId: props.el._id,
        },
      });
      props.setCommentEditId("");
      Modal.success({
        content: "😽 답글이 수정되었습니다! 😽",
        onOk() {
          setContents("");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "😹 답글 수정에 실패했습니다 😹",
        content: error.message,
      });
    }
  };
  return (
    <UseditemAnswerWriteUI
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      editContents={contents}
      el={props.el}
    />
  );
}

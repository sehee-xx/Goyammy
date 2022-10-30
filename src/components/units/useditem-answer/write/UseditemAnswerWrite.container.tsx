import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import UseditemAnswerWriteUI from "./UseditemAnswerWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./UseditemAnswerWrite.queries";
import { Modal } from "antd";
import { IUseditemAnswerWriteProps } from "./UseditemAnswerWrite.types";

export default function UseditemAnswerWrite(props: IUseditemAnswerWriteProps) {
  const [contents, setContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickCancel = () => {
    props.setCommentQnAId("");
  };

  const onClickWrite = async () => {
    try {
      if (!contents) {
        Modal.error({
          title: "내용을 입력해주세요.",
        });
        return;
      }
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      });
      props.setCommentQnAId("");
      Modal.success({
        content: "답글이 등록되었습니다.",
        onOk() {
          setContents("");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "답글 등록에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <UseditemAnswerWriteUI
      contents={contents}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickCancel={onClickCancel}
    />
  );
}

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import UseditemQuestionWriteUI from "./UseditemQuestionWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./UseditemQuestionWrite.queries";
import { Modal } from "antd";

export default function UseditemQuestionWrite() {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickWrite = async () => {
    try {
      if (!contents) {
        Modal.error({
          title: "빈칸을 채워주세요.",
        });
        return;
      }
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      Modal.success({
        content: "댓글이 등록되었습니다.",
        onOk() {
          setContents("");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "댓글 등록에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <UseditemQuestionWriteUI
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      contents={contents}
    />
  );
}

import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import UseditemAnswerListUI from "./UseditemAnswerList.presenter";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
} from "./UseditemAnswerList.queries";
import { IUseditemAnswerListProps } from "./UseditemAnswerList.types";

export default function UseditemAnswerList(props: IUseditemAnswerListProps) {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.useditemQuestionId },
  });

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const [commentEditId, setCommentEditId] = useState("");

  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION_ANSWER);

  // infinite scroll 함수
  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestionAnswers?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  const onClickEditIcon = (event: any) => {
    setCommentEditId(event?.currentTarget.id);
  };

  const onClickDelete = async (event: any) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionAnswerId: event?.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      });
      Modal.success({
        title: "😸 답글이 삭제되었습니다! 😸",
      });
    } catch (error: any) {
      Modal.error({
        title: "😿 답글을 삭제할 수 없습니다 😿",
        content: error.message,
      });
    }
  };

  return (
    <UseditemAnswerListUI
      data={data}
      onClickDelete={onClickDelete}
      loadFunc={loadFunc}
      onClickEditIcon={onClickEditIcon}
      commentEditId={commentEditId}
      setCommentEditId={setCommentEditId}
      userData={userData}
    />
  );
}

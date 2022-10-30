import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import UseditemQuestionListUI from "./UseditemQuestionList.presenter";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./UseditemQuestionList.queries";

export default function UseditemQuestionList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const [commentEditId, setCommentEditId] = useState("");

  const [commentQnAId, setCommentQnAId] = useState("");

  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
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
          useditemQuestionId: event?.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      Modal.success({
        title: "댓글이 삭제되었습니다.",
      });
    } catch (error: any) {
      Modal.error({
        title: "댓글을 삭제할 수 없습니다.",
        content: error.message,
      });
    }
  };

  const onClickQnA = (event: any) => {
    setCommentQnAId(commentQnAId ? "" : event?.currentTarget.id);
  };
  return (
    <UseditemQuestionListUI
      data={data}
      userData={userData}
      commentEditId={commentEditId}
      commentQnAId={commentQnAId}
      onClickDelete={onClickDelete}
      onClickEditIcon={onClickEditIcon}
      onClickQnA={onClickQnA}
      setCommentEditId={setCommentEditId}
      setCommentQnAId={setCommentQnAId}
      loadFunc={loadFunc}
    />
  );
}

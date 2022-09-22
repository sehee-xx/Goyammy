import { useMutation, useQuery } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [commentEditId, setCommentEditId] = useState("");
  const [commentDeleteId, setCommentDeleteId] = useState("")
  const [commentPassword, setCommentPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  // infinite scroll 함수
  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        };
      },
    });
  };

  // isModalVisible을 변경하는 함수
  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event?.target.value);
  };

  const onClickDeleteIcon = (event: any) => {
    setCommentDeleteId(event?.currentTarget.id);
    onToggleModal();
  };

  const onClickEditIcon = (event: any) => {
    setCommentEditId(event?.currentTarget.id);
  };

  const onClickDelete = async (event: any) => {
    try {
      await deleteBoardComment({
        variables: {
          password: commentPassword,
          boardCommentId: commentDeleteId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({
        title: "댓글이 삭제되었습니다.",
        onOk() {
          setCommentPassword("");
        },
      });
      onToggleModal();
    } catch (error: any) {
      Modal.error({
        title: "댓글을 삭제할 수 없습니다.",
        content: error.message,
      });
    }
  };

  return (
    <BoardCommentListUI
      data={data}
      onClickDelete={onClickDelete}
      isModalVisible={isModalVisible}
      onToggleModal={onToggleModal}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickDeleteIcon={onClickDeleteIcon}
      loadFunc={loadFunc}
      onClickEditIcon={onClickEditIcon}
      commentDeleteId={commentDeleteId}
      commentEditId={commentEditId}
      setCommentEditId={setCommentEditId}
    />
  );
}

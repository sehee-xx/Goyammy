import BoardListUI from "./BoardList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARDS,
  DELETE_BOARD,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardList() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsBest, refetch: refetchBoardsBest } = useQuery(
    FETCH_BOARDS_OF_THE_BEST
  );
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);
  const router = useRouter();

  const onClickDelete = (event: any) => {
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  const onClickMoveToBoardDetail = (event: any) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveToBest = (event: any) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickWriteBoard = () => {
    router.push(`/boards/new`);
  };

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <BoardListUI
      data={data}
      dataBoardsBest={dataBoardsBest}
      count={dataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
      onClickDelete={onClickDelete}
      onClickWriteBoard={onClickWriteBoard}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBest={onClickMoveToBest}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      refetchBoardsBest={refetchBoardsBest}
      onChangeKeyword={onChangeKeyword}
    />
  );
}

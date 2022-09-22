import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  DISLIKE_BOARD,
  LIKE_BOARD,
} from "./BoardDetail.queries";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const createDate = data?.fetchBoard.createdAt
    .slice(0, 10)
    .replace(/-/gi, ".");
  const onClickListButton = () => {
    router.push("/boards");
  };

  const onClickDeleteButton = () => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    Modal.success({
      content: "게시글이 삭제되었습니다.",
      onOk() {
        router.push("/boards");
      },
    });
  };

  const onClickUpdateButton = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickLocation = () => {
    console.log(data?.fetchBoard.boardAddress);
  };

  return (
    <BoardDetailUI
      data={data}
      createDate={createDate}
      onClickListButton={onClickListButton}
      onClickDeleteButton={onClickDeleteButton}
      onClickUpdateButton={onClickUpdateButton}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      onClickLocation={onClickLocation}
    />
  );
}

// 보드 상세 페이지
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
import { PageAdd } from "../../../src/components/units/board/detail/BoardDetail.styles";
import styled from "@emotion/styled";

const Comment = styled.div`
  border: 3px solid #cd863f;
  border-radius: 30px;
  background-color: white;
  padding-bottom: 80px;
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
`;

export default function BoardDetailPage() {
  return (
    <PageAdd>
      <BoardDetail />
      <Comment>
        <BoardCommentWrite />
        <BoardCommentList />
      </Comment>
    </PageAdd>
  );
}

// 마켓 상세 페이지
import styled from "@emotion/styled";
import { PageAdd } from "../../../src/components/units/board/detail/BoardDetail.styles";
import UseditemQuestionList from "../../../src/components/units/useditem-question/list/UseditemQuestionList.container";
import UseditemQuestionWrite from "../../../src/components/units/useditem-question/write/UseditemQuestionWrite.container";
import ItemDetail from "../../../src/components/units/useditem/detail/ItemDetail.container";

const Comment = styled.div`
  width: 100%;
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

export default function DetailPage() {
  return (
    <PageAdd>
      <ItemDetail />
      <Comment>
        <UseditemQuestionWrite />
        <UseditemQuestionList />
      </Comment>
    </PageAdd>
  );
}

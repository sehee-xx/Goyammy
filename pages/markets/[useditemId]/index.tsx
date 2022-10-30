// 마켓 상세 페이지
import styled from "@emotion/styled";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import { PageAdd } from "../../../src/components/units/board/detail/BoardDetail.styles";
import UseditemQuestionList from "../../../src/components/units/useditem-question/list/UseditemQuestionList.container";
import UseditemQuestionWrite from "../../../src/components/units/useditem-question/write/UseditemQuestionWrite.container";
import ItemDetail from "../../../src/components/units/useditem/detail/ItemDetail.container";

const Comment = styled.div`
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background-color: white;
  padding-bottom: 80px;
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
`;

export default function DetailPage() {
  useAuth();
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

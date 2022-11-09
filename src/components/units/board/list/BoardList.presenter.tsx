import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import { v4 as uuidv4 } from "uuid";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.HeaderText>베스트 게시글</S.HeaderText>
      <S.Body>
        <S.BestList>
          <S.BestImg src="/images/cat2.jpeg/"></S.BestImg>
          <S.BestImg src="/images/cat1.jpeg/"></S.BestImg>
          <S.BestImg src="/images/cat3.jpeg/"></S.BestImg>
          <S.BestImg src="/images/cat4.png/"></S.BestImg>
        </S.BestList>
        <Searchbars01
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
        <S.Table>
          <S.TableTop />
          <S.RowTop>
            <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
            <S.ColumnHeaderWriter>작성자</S.ColumnHeaderWriter>
            <S.ColumnHeaderDate>날짜</S.ColumnHeaderDate>
          </S.RowTop>
          {props.data?.fetchBoards.map((el: any) => (
            <S.Row key={uuidv4()}>
              <S.ColumnTitle
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {el.title
                  .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                  .split("@#$%")
                  .map((el: any) => (
                    <S.TextToken
                      key={uuidv4()}
                      isMatched={props.keyword === el}
                    >
                      {el}
                    </S.TextToken>
                  ))}
              </S.ColumnTitle>
              <S.ColumnWriter>{el.writer}</S.ColumnWriter>
              <S.ColumnDate>
                {el.createdAt.slice(0, 10).replace(/-/gi, ".")}
              </S.ColumnDate>
            </S.Row>
          ))}
          <S.TableBottom />
        </S.Table>
      </S.Body>
      <S.Footer>
        <Paginations01 refetch={props.refetch} count={props.count} />
        <S.SignupButton onClick={props.onClickWriteBoard}>등록</S.SignupButton>
      </S.Footer>
    </S.Wrapper>
  );
}

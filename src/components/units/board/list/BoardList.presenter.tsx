import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import { v4 as uuidv4 } from "uuid";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.Main>
        <S.HeaderText>베스트 게시글</S.HeaderText>
        <S.Body>
          <S.BestList>
            <S.BestBox src="/images/cat1.jpeg/"></S.BestBox>
            <S.BestBox src="/images/cat2.jpeg/"></S.BestBox>
            <S.BestBox src="/images/cat3.jpeg/"></S.BestBox>
            <S.BestBox src="/images/cat4.png/"></S.BestBox>
          </S.BestList>
          <Searchbars01
            refetch={props.refetch}
            refetchBoardsCount={props.refetchBoardsCount}
            onChangeKeyword={props.onChangeKeyword}
          />
          <S.Table>
            <S.TableTop />
            <S.RowTop>
              <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
              <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
              <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
              <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
            </S.RowTop>
            {props.data?.fetchBoards.map((el: any) => (
              <S.Row key={uuidv4()}>
                <S.ColumnBasic>
                  {String(el._id).slice(-4).toUpperCase()}
                </S.ColumnBasic>
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
                <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                <S.ColumnBasic>
                  {el.createdAt.slice(0, 10).replace(/-/gi, ".")}
                </S.ColumnBasic>
              </S.Row>
            ))}
            <S.TableBottom />
          </S.Table>
        </S.Body>
        <S.Footer>
          <Paginations01 refetch={props.refetch} count={props.count} />
          <S.SignupButton onClick={props.onClickWriteBoard}>
            등록하기
          </S.SignupButton>
        </S.Footer>
      </S.Main>
    </S.Wrapper>
  );
}

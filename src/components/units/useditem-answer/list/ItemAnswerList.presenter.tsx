import * as S from "./ItemAnswerList.styles";
import { IUseditemAnswerListUIProps } from "./ItemAnswerList.types";
import InfiniteScroll from "react-infinite-scroller";
import UseditemAnswerEdit from "../edit/ItemAnswerEdit.container";
import { v4 as uuidv4 } from "uuid";

export default function UseditemAnswerListUI(
  props: IUseditemAnswerListUIProps
) {
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={true}
      >
        {props.data?.fetchUseditemQuestionAnswers ? (
          props.data?.fetchUseditemQuestionAnswers.map((el: any) => (
            <S.ItemWrapper key={uuidv4()} id={el.name}>
              {el._id !== props.commentEditId && (
                <div>
                  <S.FlexWrapper>
                    <S.Avatar src="/images/profile.png" />
                    <S.MainWrapper>
                      <S.WriterWrapper>
                        <S.Writer>{el.user.name}</S.Writer>
                      </S.WriterWrapper>
                      <S.Contents>{el.contents}</S.Contents>
                    </S.MainWrapper>
                    {el.user._id === props.userData?.fetchUserLoggedIn._id ? (
                      <S.OptionWrapper>
                        <S.EditIcon
                          src="/images/graypencil.png/"
                          id={el._id}
                          onClick={props.onClickEditIcon}
                        />
                        <S.DeleteIcon
                          src="/images/grayX.png/"
                          id={el._id}
                          onClick={props.onClickDelete}
                        />
                      </S.OptionWrapper>
                    ) : (
                      <S.OptionWrapper></S.OptionWrapper>
                    )}
                  </S.FlexWrapper>
                  <S.DateString>
                    {el.createdAt.slice(0, 10).replace(/-/gi, ".")}
                  </S.DateString>
                </div>
              )}
              {el._id === props.commentEditId && (
                <UseditemAnswerEdit
                  el={el}
                  setCommentEditId={props.setCommentEditId}
                ></UseditemAnswerEdit>
              )}
            </S.ItemWrapper>
          ))
        ) : (
          <></>
        )}
      </InfiniteScroll>
    </div>
  );
}

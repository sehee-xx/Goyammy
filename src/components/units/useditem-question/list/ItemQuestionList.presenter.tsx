import * as S from "./ItemQuestionList.styles";
import { IUseditemQuestionListUIProps } from "./ItemQuestionList.types";
import InfiniteScroll from "react-infinite-scroller";
import UseditemQuestionEdit from "../edit/ItemQuestionEdit.container";
import UseditemAnswerWrite from "../../useditem-answer/write/ItemAnswerWrite.container";
import UseditemAnswerList from "../../useditem-answer/list/ItemAnswerList.container";
import { v4 as uuidv4 } from "uuid";

export default function UseditemQuestionListUI(
  props: IUseditemQuestionListUIProps
) {
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={true}
      >
        {props.data?.fetchUseditemQuestions ? (
          props.data?.fetchUseditemQuestions.map((el: any) => (
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
                        <S.QnA id={el._id} onClick={props.onClickQnA} />
                        <S.DeleteIcon
                          src="/images/grayX.png/"
                          id={el._id}
                          onClick={props.onClickDelete}
                        />
                      </S.OptionWrapper>
                    ) : (
                      <S.OptionWrapper>
                        <S.QnA id={el._id} onClick={props.onClickQnA} />
                      </S.OptionWrapper>
                    )}
                  </S.FlexWrapper>
                  <S.DateString>
                    {el.createdAt.slice(0, 10).replace(/-/gi, ".")}
                  </S.DateString>
                </div>
              )}
              {el._id === props.commentEditId && (
                <UseditemQuestionEdit
                  el={el}
                  setCommentEditId={props.setCommentEditId}
                />
              )}
              {el._id === props.commentQnAId && (
                <UseditemAnswerWrite
                  useditemQuestionId={el._id}
                  setCommentQnAId={props.setCommentQnAId}
                />
              )}
              <UseditemAnswerList useditemQuestionId={el._id} />
            </S.ItemWrapper>
          ))
        ) : (
          <></>
        )}
      </InfiniteScroll>
    </div>
  );
}

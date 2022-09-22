import * as S from "./UseditemQuestionList.styles";
import { IUseditemQuestionListUIProps } from "./UseditemQuestionList.types";
import InfiniteScroll from "react-infinite-scroller";
import UseditemQuestionEdit from "../edit/UseditemQuestionEdit.container";
import UseditemAnswerWrite from "../../useditem-answer/write/UseditemAnswerWrite.container";
import UseditemAnswerList from "../../useditem-answer/list/UseditemAnswerList.container";

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
        {props.data?.fetchUseditemQuestions.map((el: any) => (
          <S.ItemWrapper key={el._id} id={el.name}>
            {el._id !== props.commentEditId && (
              <S.Box>
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
                      <S.UpdateIcon
                        src="/images/graypencil.png/"
                        id={el._id}
                        onClick={props.onClickEditIcon}
                      />
                      <S.DeleteIcon
                        src="/images/grayX.png/"
                        id={el._id}
                        onClick={props.onClickDelete}
                      />
                      <S.QnA id={el._id} onClick={props.onClickQnA} />
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
              </S.Box>
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
        ))}
      </InfiniteScroll>
    </div>
  );
}

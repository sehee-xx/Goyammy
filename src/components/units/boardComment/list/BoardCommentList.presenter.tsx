import { Modal } from "antd";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentEdit from "../edit/BoardCommentEdit.container";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={true}
      >
        {props.data?.fetchBoardComments.map((el: any) => (
          <S.ItemWrapper key={el._id} id={el.writer}>
            {el._id !== props.commentEditId && (
              <div>
                <S.FlexWrapper>
                  <S.Avatar src="/images/profile.png" />
                  <S.MainWrapper>
                    <S.WriterWrapper>
                      <S.Writer>{el.writer}</S.Writer>
                      <S.Star value={el.rating} disabled />
                    </S.WriterWrapper>
                    <S.Contents>{el.contents}</S.Contents>
                  </S.MainWrapper>
                  <S.OptionWrapper>
                    <S.EditDeleteIcon
                      src="/images/graypencil.png/"
                      id={el._id}
                      onClick={props.onClickEditIcon}
                    />
                    <S.EditDeleteIcon
                      src="/images/grayX.png/"
                      id={el._id}
                      onClick={props.onClickDeleteIcon}
                    />
                    {props.isModalVisible && (
                      <Modal
                        title="비밀번호 입력"
                        visible={true}
                        onOk={props.onClickDelete}
                        onCancel={props.onToggleModal}
                        cancelText="취소"
                        okText="삭제"
                      >
                        <S.Password
                          type="password"
                          placeholder="비밀번호를 입력해주세요"
                          onChange={props.onChangeCommentPassword}
                        ></S.Password>
                      </Modal>
                    )}
                  </S.OptionWrapper>
                </S.FlexWrapper>
                <S.DateString>
                  {el.createdAt.slice(0, 10).replace(/-/gi, ".")}
                </S.DateString>
              </div>
            )}
            {el._id === props.commentEditId && (
              <BoardCommentEdit
                el={el}
                setCommentEditId={props.setCommentEditId}
              ></BoardCommentEdit>
            )}
          </S.ItemWrapper>
        ))}
      </InfiniteScroll>
    </div>
  );
}

import * as S from "./BoardCommentEdit.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentEdit.types";

export default function BoardCommentUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Top>
          <S.TopText>댓글 수정</S.TopText>
          <S.CancelIcon src="/images/grayX.png" onClick={props.onClickCancel} />
        </S.Top>
        <S.WriterInfo>
          <S.Writer
            type="text"
            placeholder="작성자"
            defaultValue={props.el.writer}
            readOnly
          ></S.Writer>
          <S.Writer
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></S.Writer>
          <S.Star onChange={props.setStar} value={props.star} />
        </S.WriterInfo>
        <S.Comment>
          <S.CommentInput
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            defaultValue={props.el.contents}
          ></S.CommentInput>
          <S.CommentBottom>
            <S.CommentLimit>{props.editContents.length}/100 </S.CommentLimit>
            <S.CommentButton onClick={props.onClickUpdate}>
              수정하기
            </S.CommentButton>
          </S.CommentBottom>
        </S.Comment>
      </S.Header>
    </S.Wrapper>
  );
}

import * as S from "./ItemQuestionWrite.styles";
import { IUseditemQuestionWriteUIProps } from "./ItemQuestionWrite.types";

export default function UseditemQuestionWriteUI(
  props: IUseditemQuestionWriteUIProps
) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.TopText>문의</S.TopText>
        <S.CommentInput
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={props.contents}
        ></S.CommentInput>
        <S.CommentBottom>
          <S.CommentLimit>{props.contents.length}/100 </S.CommentLimit>
          <S.CommentButton onClick={props.onClickWrite}>
            등록하기
          </S.CommentButton>
        </S.CommentBottom>
      </S.Header>
    </S.Wrapper>
  );
}

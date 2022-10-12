import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.Main>
        <S.Header>
          <S.ProfileImage src="/images/profile.png"></S.ProfileImage>
          <S.HeaderText>
            <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
            <S.Date>Date : {props.createDate} </S.Date>
          </S.HeaderText>
          <S.Info>
            <S.Link src="/images/link.png"></S.Link>
            <S.Location
              onClick={props.onClickLocation}
              src="/images/location.png"
            ></S.Location>
          </S.Info>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          {props.data?.fetchBoard.images.map((_: any, index: number) => (
            <S.Image
              key={uuidv4()}
              src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[index]}`}
            />
          ))}

          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.data?.fetchBoard.contents),
              }}
            />
          ) : (
            <S.Contents />
          )}
          {props.data?.fetchBoard.youtubeUrl && (
            <S.Video
              url={props.data?.fetchBoard.youtubeUrl}
              width="800px"
              height="600px"
            />
          )}
        </S.Body>
        <S.Footer>
          <S.LikeBox>
            <S.Like src="/images/like.png" onClick={props.onClickLike}></S.Like>
            <S.LikeText>{props.data?.fetchBoard.likeCount}</S.LikeText>
          </S.LikeBox>
          <S.DislikeBox>
            <S.Dislike
              src="/images/dislike.png"
              onClick={props.onClickDislike}
            ></S.Dislike>
            <S.DislikeText>{props.data?.fetchBoard.dislikeCount}</S.DislikeText>
          </S.DislikeBox>
        </S.Footer>
      </S.Main>
      <S.ButtonBox>
        <S.Button onClick={props.onClickListButton}>목록으로</S.Button>
        <S.Button onClick={props.onClickUpdateButton}>수정하기</S.Button>
        <S.Button onClick={props.onClickDeleteButton}>삭제하기</S.Button>
      </S.ButtonBox>
    </S.Wrapper>
  );
}

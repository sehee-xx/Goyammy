import DOMPurify from "dompurify";
import * as S from "./ItemDetail.styles";
import { IItemDetailProps } from "./ItemDetail.types";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KakaoMapDetail from "../../../commons/kakao-map/detail";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ItemDetailUI(props: IItemDetailProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
  };

  return (
    <S.Wrapper>
      <S.Main>
        <S.Header>
          <S.ProfileImage src="/images/profile.png"></S.ProfileImage>
          <S.HeaderText>
            <S.Writer>{props.data?.fetchUseditem.seller.name}</S.Writer>
            <S.Date>{props.createDate}</S.Date>
          </S.HeaderText>
          <S.Info>
            <S.Link src="/images/link.png"></S.Link>
            <S.Location src="/images/location.png"></S.Location>
          </S.Info>
        </S.Header>
        <S.Body>
          <S.RowBox>
            <S.ColumnBox>
              <S.Keyword>{props.data?.fetchUseditem.remarks}</S.Keyword>
              <S.Name>{props.data?.fetchUseditem.name} </S.Name>
            </S.ColumnBox>
            <S.ColumnBox>
              <S.Pick
                src="/images/pick.png"
                onClick={props.onClickPick}
              ></S.Pick>
              <S.PickCount>{props.data?.fetchUseditem.pickedCount}</S.PickCount>
            </S.ColumnBox>
          </S.RowBox>
          <S.Price>₩ {props.data?.fetchUseditem.price}</S.Price>
          {props.data?.fetchUseditem.images[0] ? (
            <S.ImageWrapper>
              <Slider {...settings}>
                {props.data?.fetchUseditem.images.map((el: string) => (
                  <S.Carousel
                    key={uuidv4()}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
              </Slider>
            </S.ImageWrapper>
          ) : (
            <></>
          )}
          {typeof window !== "undefined" ? (
            <S.ProductInfo
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            />
          ) : (
            <S.ProductInfo />
          )}
          <S.Tag>{props.data?.fetchUseditem.tags}</S.Tag>
          <KakaoMapDetail
            lat={props.data?.fetchUseditem?.useditemAddress?.lat || 37.4847}
            lng={props.data?.fetchUseditem?.useditemAddress?.lng || 126.9027}
          />
        </S.Body>
        {props.data?.fetchUseditem.seller.name ===
        props.userData?.fetchUserLoggedIn.name ? (
          <S.Footer>
            <S.Button onClick={props.onClickGoToList}>목록으로</S.Button>
            <S.Button onClick={props.onClickUpdateButton}>수정하기</S.Button>
            <S.Button onClick={props.onClickDeleteButton}>삭제하기</S.Button>
          </S.Footer>
        ) : (
          <S.Footer>
            <S.Button onClick={props.onClickGoToList}>목록으로</S.Button>
            <S.Button onClick={props.onClickBuy}>구매하기</S.Button>
          </S.Footer>
        )}
      </S.Main>
    </S.Wrapper>
  );
}

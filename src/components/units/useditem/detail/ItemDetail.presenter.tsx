import DOMPurify from "dompurify";
import * as S from "./ItemDetail.styles";
import { IItemDetailProps } from "./ItemDetail.types";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KakaoMapDetail from "../../../commons/kakao-map/detail";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ItemDetailUI(props: IItemDetailProps) {
  return (
    <S.Wrapper>
      <S.Main>
        <S.Header>
          <S.ProfileImage src="/images/profile.png"></S.ProfileImage>
          <S.HeaderText>
            <S.Writer>{props.data?.fetchUseditem.seller.name}</S.Writer>
            <S.Date>{props.createDate}</S.Date>
          </S.HeaderText>
          <S.PickBox>
            <S.Pick src="/images/pick.png" onClick={props.onClickPick}></S.Pick>
            <S.PickCount>{props.data?.fetchUseditem.pickedCount}</S.PickCount>
          </S.PickBox>
        </S.Header>
        <S.Body>
          <S.RowBox>
            {props.data?.fetchUseditem.images[0] ? (
              <S.ImageWrapper>
                <S.StyledSlider {...props.setting}>
                  {props.data?.fetchUseditem.images.map((el: string) => (
                    <S.Image
                      key={uuidv4()}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
                </S.StyledSlider>
              </S.ImageWrapper>
            ) : (
              <S.Image src="/images/noImage.jpeg" />
            )}
            <S.ItemInfo>
              <S.RightTopBox>
                <S.Name>{props.data?.fetchUseditem.name} </S.Name>
                <S.Remark>{props.data?.fetchUseditem.remarks}</S.Remark>
                <S.TagBox>
                  {props.data?.fetchUseditem.tags.map((el: string) => {
                    return <S.Tag key={uuidv4()}>#{el}</S.Tag>;
                  })}
                </S.TagBox>
                <S.PriceBox>
                  <S.Price>{props.price}</S.Price>
                  <S.Won>원</S.Won>
                </S.PriceBox>
                {props.data?.fetchUseditem?.useditemAddress.address && (
                  <S.LocationBox>
                    <S.LocationIcon src="/images/place.png" />
                    <S.Location>
                      {props.data?.fetchUseditem?.useditemAddress?.address}
                    </S.Location>
                    <S.Location>
                      {
                        props.data?.fetchUseditem?.useditemAddress
                          ?.addressDetail
                      }
                    </S.Location>
                  </S.LocationBox>
                )}
              </S.RightTopBox>
              <S.RightBottomBox>
                {props.data?.fetchUseditem.seller.name ===
                  props.userData?.fetchUserLoggedIn.name || (
                  <S.ButtonBox>
                    <S.BuyButton onClick={props.onClickBuy}>
                      구매하기
                    </S.BuyButton>
                  </S.ButtonBox>
                )}
              </S.RightBottomBox>
            </S.ItemInfo>
          </S.RowBox>
          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            />
          ) : (
            <S.Contents />
          )}
          <S.MapWrapper>
            {props.data?.fetchUseditem?.useditemAddress && (
              <KakaoMapDetail
                lat={props.data?.fetchUseditem?.useditemAddress?.lat || 37.4847}
                lng={
                  props.data?.fetchUseditem?.useditemAddress?.lng || 126.9027
                }
              />
            )}
          </S.MapWrapper>
          {props.data?.fetchUseditem.seller.name ===
          props.userData?.fetchUserLoggedIn.name ? (
            <S.Footer>
              <S.BottomButton onClick={props.onClickGoToList}>
                목록으로
              </S.BottomButton>
              <S.BottomButton onClick={props.onClickUpdateButton}>
                수정하기
              </S.BottomButton>
              <S.BottomButton onClick={props.onClickDeleteButton}>
                삭제하기
              </S.BottomButton>
            </S.Footer>
          ) : (
            <S.Footer>
              <S.BottomButton onClick={props.onClickGoToList}>
                목록으로
              </S.BottomButton>
            </S.Footer>
          )}
        </S.Body>
      </S.Main>
    </S.Wrapper>
  );
}

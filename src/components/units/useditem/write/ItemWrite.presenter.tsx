import Button02 from "../../../commons/buttons/02";
import Uploads01 from "../../../commons/uploads/Uploads.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ItemWrite.styles";
import { ItemWriteUIProps } from "./ItemWrite.types";
import KakaoMapWrite from "../../../commons/kakao-map/write";
import Input03 from "../../../commons/inputs/03";

export default function ItemWriteUI(props: ItemWriteUIProps) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickEdit : props.onClickSubmit
      )}
    >
      <S.Wrapper>
        <S.Title>상품{props.isEdit ? " 수정하기" : " 등록하기"} </S.Title>
        <S.Label>상품명</S.Label>
        <Input03
          type="text"
          placeholder="상품명을 작성해주세요."
          defaultValue={props.itemData?.fetchUseditem.name}
          register={props.register("name")}
        />
        <S.Label>한줄 요약</S.Label>
        <Input03
          type="text"
          placeholder="상품을 입력해주세요."
          register={props.register("remarks")}
          defaultValue={props.itemData?.fetchUseditem.remarks}
        />
        <S.Label>상품 설명</S.Label>
        <S.ProductInfo
          placeholder="상품을 설명해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.itemData?.fetchUseditem.contents}
        />
        <S.Label>판매 가격</S.Label>
        <Input03
          type="text"
          placeholder="판매 가격을 입력해주세요."
          register={props.register("price")}
          defaultValue={props.itemData?.fetchUseditem.price}
        />
        <S.Label>태그 입력</S.Label>
        <Input03
          type="text"
          placeholder="#고양이 #중고마켓 #환영합니다"
          defaultValue={props.itemData?.fetchUseditem.tags}
        />
        <S.LocationInfo>
          <S.MapBox>
            <S.Label>거래 위치</S.Label>
            <KakaoMapWrite
              onChangeLocation={props.onChangeLocation}
              lat={props.itemData?.fetchUseditem.useditemAddress.lat || 37.4847}
              lng={
                props.itemData?.fetchUseditem.useditemAddress.lng || 126.9027
              }
            />
          </S.MapBox>
          <S.GPSBox>
            <S.Label>GPS</S.Label>
            <S.LocationBox>
              <S.LATLNG
                readOnly
                {...props.register("lat")}
                defaultValue={props.itemData?.fetchUseditem.useditemAddress.lat}
              />
              <S.LocationIcon />
              <S.LATLNG
                readOnly
                {...props.register("lng")}
                defaultValue={props.itemData?.fetchUseditem.useditemAddress.lng}
              />
            </S.LocationBox>
            <S.Label>주소</S.Label>
            <S.AddressInput
              readOnly
              {...props.register("address")}
              defaultValue={
                props.itemData?.fetchUseditem.useditemAddress.address
              }
            />
            <S.AddressInput
              {...props.register("addressDetail")}
              defaultValue={
                props.itemData?.fetchUseditem.useditemAddress.addressDetail
              }
            />
          </S.GPSBox>
        </S.LocationInfo>
        <S.Label>사진 첨부</S.Label>
        <S.ImageWrapper>
          {new Array(3).fill(1).map((_: any, index: number) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              onChangeFiles={props.onChangeFiles}
              fileUrls={props.fileUrls}
            />
          ))}
        </S.ImageWrapper>
        <S.Label>메인 사진 설정</S.Label>
        <S.OptionWrapper>
          <S.RadioButton type="radio" name="radio-button" />
          <S.RadioLabel>사진1</S.RadioLabel>
          <S.RadioButton type="radio" name="radio-button" />
          <S.RadioLabel>사진2</S.RadioLabel>
        </S.OptionWrapper>
        <Button02
          title={props.isEdit ? "수정하기" : "등록하기"}
          isActive={props.formState.isValid}
        ></Button02>
      </S.Wrapper>
    </form>
  );
}

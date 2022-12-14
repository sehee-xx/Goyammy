import Button02 from "../../../commons/buttons/02";
import Uploads01 from "../../../commons/uploads/Uploads.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ItemWrite.styles";
import { ItemWriteUIProps } from "./ItemWrite.types";
import KakaoMapWrite from "../../../commons/kakao-map/write";
import Input02 from "../../../commons/inputs/02";
import MakeTag from "../../../commons/tags";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ItemWriteUI(props: ItemWriteUIProps) {
  return (
    <S.Wrapper
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickEdit : props.onClickSubmit
      )}
    >
      <S.Title>상품{props.isEdit ? " 수정" : " 등록"} </S.Title>
      <S.RowBox>
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <Input02
            type="text"
            placeholder="상품명을 작성해주세요."
            defaultValue={props.itemData?.fetchUseditem.name}
            register={props.register("name")}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>한줄 요약</S.Label>
          <Input02
            type="text"
            placeholder="상품을 입력해주세요."
            register={props.register("remarks")}
            defaultValue={props.itemData?.fetchUseditem.remarks}
          />
        </S.InputWrapper>
      </S.RowBox>
      <S.InputWrapper>
        <S.Label>상품 설명</S.Label>
        <S.ProductInfo
          placeholder="상품을 설명해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.itemData?.fetchUseditem.contents}
        />
      </S.InputWrapper>
      <S.RowBox>
        <S.InputWrapper>
          <S.Label>판매 가격</S.Label>
          <Input02
            type="text"
            placeholder="판매 가격을 입력해주세요."
            register={props.register("price")}
            defaultValue={props.itemData?.fetchUseditem.price}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>태그 입력</S.Label>
          <S.TagBox>
            <MakeTag tags={props.tags} setTags={props.setTags} />
          </S.TagBox>
        </S.InputWrapper>
      </S.RowBox>
      <S.RowBox>
        <S.InputWrapper>
          <S.Label>거래 위치</S.Label>
          <KakaoMapWrite setLatLng={props.setLatLng} address={props.address} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>우편번호</S.Label>
          <S.ZipcodeBox>
            <S.Zipcode
              readOnly
              {...props.register("zipcode")}
              defaultValue={
                props.itemData?.fetchUseditem.useditemAddress.zipcode
              }
            />
            <S.ZipcodeButton type="button" onClick={props.onToggleModal}>
              우편번호 검색
            </S.ZipcodeButton>
            {props.isModalVisible && (
              <Modal
                visible={true}
                onOk={props.onToggleModal}
                onCancel={props.onToggleModal}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
          </S.ZipcodeBox>
          <S.Label>주소</S.Label>
          <S.Address
            readOnly
            {...props.register("address")}
            defaultValue={props.itemData?.fetchUseditem.useditemAddress.address}
          />
          <Input02
            register={props.register("addressDetail")}
            defaultValue={
              props.itemData?.fetchUseditem.useditemAddress?.addressDetail
            }
          />
        </S.InputWrapper>
      </S.RowBox>
      <S.InputWrapper>
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
      </S.InputWrapper>
      <Button02
        title={props.isEdit ? "수정" : "등록"}
        isActive={props.formState.isValid}
      ></Button02>
    </S.Wrapper>
  );
}

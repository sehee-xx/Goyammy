import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import Uploads01 from "../../../commons/uploads/Uploads.container";
import { v4 as uuidv4 } from "uuid";
import Input02 from "../../../commons/inputs/02";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickEdit : props.onClickSubmit
      )}
    >
      <S.Title>게시글{props.isEdit ? " 수정" : " 등록"}</S.Title>
      <S.RowBox>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <Input02
            type="text"
            placeholder="작성자를 입력해 주세요."
            register={props.register("writer")}
            defaultValue={props.boardData?.fetchBoard.writer}
            disabled={props.isEdit}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <Input02
            type="password"
            placeholder="비밀번호를 작성해 주세요."
            register={props.register("password")}
            defaultValue={props.boardData?.fetchBoard.password}
          />
        </S.InputWrapper>
      </S.RowBox>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <Input02
          type="text"
          placeholder="제목을 작성해 주세요."
          register={props.register("title")}
          defaultValue={props.boardData?.fetchBoard.title}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 입력하세요."
          onChange={props.onChangeContents}
          defaultValue={props.boardData?.fetchBoard.contents}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipcodeWrapper>
          <S.Zipcode
            readOnly
            defaultValue={
              props.zipcode
                ? props.zipcode
                : props.boardData?.fetchBoard.boardAddress?.zipcode
            }
          />
          <S.SearchButton type="button" onClick={props.onToggleModal}>
            우편번호 검색
          </S.SearchButton>
          {props.isModalVisible && (
            <Modal
              visible={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
            >
              <DaumPostcode onComplete={props.handleComplete} />
            </Modal>
          )}
        </S.ZipcodeWrapper>
        <S.Address
          readOnly
          defaultValue={
            props.address
              ? props.address
              : props.boardData?.fetchBoard.boardAddress?.address
          }
        />
        <Input02
          register={props.register("addressDetail")}
          defaultValue={props.boardData?.fetchBoard.boardAddress?.addressDetail}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <Input02
          placeholder="링크를 복사해 주세요."
          register={props.register("youtubeUrl")}
          defaultValue={props.boardData?.fetchBoard.youtubeUrl}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>이미지</S.Label>
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
      <S.SubmitButton disabled={!props.formState.isValid}>
        {props.isEdit ? " 수정" : " 등록"}
      </S.SubmitButton>
    </S.Wrapper>
  );
}

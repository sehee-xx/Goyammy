import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import Uploads01 from "../../../commons/uploads/Uploads.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  console.log(props.boardData?.fetchBoard);
  return (
    <S.Wrapper>
      <S.Title>게시글{props.isEdit ? " 수정" : " 등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            defaultValue={props.boardData?.fetchBoard.writer}
            disabled={props.isEdit}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={props.onChangePassword}
            defaultValue={props.boardData?.fetchBoard.password}
          />
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.boardData?.fetchBoard.title}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 작성해주세요."
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
          <S.SearchButton onClick={props.onToggleModal}>
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
        <S.Address
          onChange={props.onChangeAddressDetail}
          defaultValue={props.boardData?.fetchBoard.boardAddress?.addressDetail}
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.boardData?.fetchBoard.youtubeUrl}
        />
      </S.InputWrapper>
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
      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton
          disabled={props.isEdit ? false : props.checkButton}
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
        >
          {props.isEdit ? " 수정" : " 등록"}하기
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

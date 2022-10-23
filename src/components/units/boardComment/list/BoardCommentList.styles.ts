import styled from "@emotion/styled";
import { Rate } from "antd";

export const ItemWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  padding: 40px 102px;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 12px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #464747;
`;

export const Contents = styled.div`
  padding-top: 10px;
  color: #464747;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const EditDeleteIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: #464747;
  padding-top: 15px;
  font-size: 12px;
  padding-left: 52px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
  color: orange;
`;

export const password = styled.input`
  background-color: #f7f8f9;
  ::placeholder {
    color: #a5a5a5;
  }
  color: #464747;
  outline-color: #f39c1f;
  border: none;
  height: 40px;
  padding-left: 10px;
`;

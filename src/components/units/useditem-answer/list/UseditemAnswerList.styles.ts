import styled from "@emotion/styled";
import { Rate } from "antd";

export const ItemWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  border-radius: 30px;
  border: 3px solid rgb(238, 172, 101);
  background-color: white;
  padding: 15px 30px;
  margin-top: 15px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: #8b4513;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #8b4513;
`;
export const Contents = styled.div`
  padding-top: 4px;
  color: #8b4513;
  padding-left: 2px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 20px;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: gray;
  padding-top: 15px;
  padding-left: 62px;
  color: #8b4513;
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
  border: 1px solid lightgray;
`;

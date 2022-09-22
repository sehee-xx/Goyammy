import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const Page = styled.div`
  width: 1199px;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 87px;
  padding-top: 40px;
  background-color: #ffdead;
  border-radius: 30px;
  padding: 20px 30px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 40px;
`;
export const TopImg = styled.img``;
export const TopText = styled.div`
  padding-left: 14px;
  font-size: 30px;
  font-weight: 600;
  color: #8b4513;
`;
export const WriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding-bottom: 20px;
`;
export const Writer = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  color: #8b4513;
  font-size: 18px;
  font-weight: 500;
  margin-right: 24px;
  border: none;
  border-radius: 30px;
  ::placeholder {
    color: #8b4513;
  }
  outline-color: #8b4513;
`;
export const Comment = styled.div`
  width: 100%;
  border: none;
  border-radius: 30px;
`;
export const CommentInput = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #8b4513;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  border-radius: 30px;
  resize: none;
  ::placeholder {
    color: #8b4513;
  }
  outline-color: #8b4513;
`;
export const CommentBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;
export const CommentLimit = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #8b4513;
`;
export const CommentButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  margin-top: 10px;
  cursor: pointer;
`;
export const Star = styled(Rate)`
  color: orange;
`;

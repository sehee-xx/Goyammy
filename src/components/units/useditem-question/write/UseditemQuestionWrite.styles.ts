import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-radius: 10px;
  padding: 60px 102px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopText = styled.div`
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 20px;
  color: #464747;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 20px 20px;
  background-color: #f7f8f9;
  font-size: 14px;
  font-weight: 500;
  color: #464747;
  border: none;
  border-radius: 10px;
  resize: none;
  ::placeholder {
    color: #a5a5a5;
  }
  outline-color: #f39c1f;
`;

export const CommentBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;

export const CommentLimit = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #464747;
`;

export const CommentButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #a5a5a5;
  color: white;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #f39c1f;
    color: white;
  }
`;

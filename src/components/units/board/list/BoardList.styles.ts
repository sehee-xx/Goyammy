import styled from "@emotion/styled";
import { ITextTokenProps } from "./BoardList.types";

export const Wrapper = styled.div``;
export const Main = styled.div`
  width: 100%;
  background-color: linen;
  border-radius: 30px;
  border: 3px solid #cd863f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 40px 50px 80px 50px;
`;
export const HeaderText = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: black;
  padding-bottom: 40px;
  color: #8b4513;
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BestList = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 80px;
`;
export const BestBox = styled.img`
  width: 282px;
  height: 257px;
  background-color: gray;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 0px 12px;
`;
export const Date = styled.input`
  width: 244px;
  height: 52px;
  color: #8b4513;
  outline-color: #cd863f;
  background-color: #faf0e6;
  ::placeholder {
    color: #8b4513;
  }
  border-radius: 10px;
  border: none;
  padding-left: 20px;
  margin-right: 44px;
`;
export const BoardLists = styled.div`
  width: 100%;
  height: 583px;
  background-color: white;
  margin-bottom: 40px;
`;
export const LabelBar = styled.div``;
export const Label = styled.label``;

export const Column = styled.div`
  width: 20%;
`;
export const ListContents = styled.div``;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SignupButton = styled.button`
  width: 171px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 700px;
  background-color: #ffdab9;
  border-radius: 30px;
  margin-top: 80px;
  color: #8b4513;
  cursor: pointer;
  :hover {
    background-color: orange;
    color: white;
  }
`;

export const TableTop = styled.div`
  margin-top: 20px;
`;

export const TableBottom = styled.div``;

export const RowTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 2px solid #cd863f;
`;

export const Row = styled(RowTop)`
  :hover {
    color: orange;
    font-weight: 900;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;
  :hover {
    color: orange;
  }
`;

export const Table = styled.div`
  width: 1200px;
  padding-bottom: 40px;
  color: #8b4513;
  font-size: 16px;
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "orange" : "")};
  font-weight: ${(props: ITextTokenProps) => (props.isMatched ? "bold" : "")};
`;

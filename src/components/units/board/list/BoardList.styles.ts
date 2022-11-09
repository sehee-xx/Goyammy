import styled from "@emotion/styled";
import { ITextTokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1247px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 80px 120px;
`;

export const HeaderText = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 40px;
  color: #464747;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BestList = styled.div`
  width: 100%;
  max-width: 1007px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;
`;

export const BestImg = styled.img`
  max-width: 230px;
  aspect-ratio: 1;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Table = styled.div`
  width: 100%;
  padding-bottom: 40px;
  color: #464747;
  font-size: 16px;
`;

export const TableTop = styled.div`
  margin-top: 20px;
`;

export const RowTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1.5px solid #a5a5a5;
`;

export const Row = styled(RowTop)`
  :hover {
    color: orange;
    font-weight: 900;
  }
`;

export const ColumnHeaderTitle = styled.div`
  width: 25%;
  text-align: center;
`;

export const ColumnHeaderWriter = styled.div`
  width: 50%;
  text-align: center;
`;

export const ColumnHeaderDate = styled.div`
  width: 25%;
  text-align: center;
`;

export const ColumnWriter = styled.div`
  width: 50%;
  text-align: center;
`;

export const ColumnDate = styled.div`
  width: 25%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 25%;
  text-align: center;
  cursor: pointer;
  :hover {
    color: #f39c1f;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "#f39c1f" : "")};
  font-weight: ${(props: ITextTokenProps) => (props.isMatched ? "bold" : "")};
`;

export const TableBottom = styled.div``;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignupButton = styled.button`
  width: 180px;
  height: 60px;
  border: none;
  font-size: 18px;
  font-weight: 500px;
  background-color: #a5a5a5;
  border-radius: 10px;
  margin-top: 100px;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #f39c1f;
    color: white;
  }
`;

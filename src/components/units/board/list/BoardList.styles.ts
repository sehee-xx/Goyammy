import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/breakPoints/breakPoints";
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

  @media ${breakPoints.tablet} {
    padding: 40px 50px;
  }

  @media ${breakPoints.mobile} {
    padding: 20px 30px;
  }
`;

export const HeaderText = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 40px;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 20px;
    padding-bottom: 20px;
  }
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;

  @media ${breakPoints.tablet} {
    padding-bottom: 40px;
  }

  @media ${breakPoints.mobile} {
    padding-bottom: 20px;
  }
`;

export const BestImg = styled.img`
  width: 23.5%;
  aspect-ratio: 1;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Table = styled.div`
  width: 100%;
  padding-bottom: 40px;
  color: #464747;
  font-size: 16px;

  @media ${breakPoints.tablet} {
    padding-bottom: 30px;
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    padding-bottom: 20px;
    font-size: 10px;
  }
`;

export const TableTop = styled.div`
  margin-top: 20px;

  @media ${breakPoints.tablet} {
    margin-top: 0px;
  }
`;

export const RowTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1.5px solid #a5a5a5;

  @media ${breakPoints.tablet} {
    height: 40px;
    line-height: 40px;
  }

  @media ${breakPoints.mobile} {
    height: 30px;
    line-height: 30px;
  }
`;

export const Row = styled(RowTop)`
  :hover {
    color: #f39c1f;
    font-weight: 900;
  }
`;

export const ColumnHeaderWriter = styled.div`
  width: 25%;
  text-align: center;
  background-color: #f7f8f9;
`;

export const ColumnHeaderTitle = styled.div`
  width: 50%;
  text-align: center;
  background-color: #f7f8f9;
`;

export const ColumnHeaderDate = styled.div`
  width: 25%;
  text-align: center;
  background-color: #f7f8f9;
`;

export const ColumnWriter = styled.div`
  width: 25%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 50%;
  padding: 0px 15px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  :hover {
    color: #f39c1f;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "#f39c1f" : "")};
  font-weight: ${(props: ITextTokenProps) => (props.isMatched ? "bold" : "")};
`;

export const ColumnDate = styled.div`
  width: 25%;
  text-align: center;
`;

export const TableBottom = styled.div``;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WriteButton = styled.button`
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

  @media ${breakPoints.tablet} {
    width: 140px;
    height: 55px;
    font-size: 16px;
    margin-top: 80px;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 40px;
    font-size: 12px;
    margin-top: 50px;
  }
`;

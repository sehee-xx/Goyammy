import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/breakPoints/breakPoints";

export const ItemWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  padding: 30px 60px;
  margin-bottom: 20px;
  margin-top: 30px;

  @media ${breakPoints.tablet} {
    padding: 30px 50px;
    margin-top: 25px;
  }

  @media ${breakPoints.mobile} {
    padding: 20px 40px;
    margin-top: 15px;
  }
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;

  @media ${breakPoints.tablet} {
    width: 30px;
    height: 30px;
  }

  @media ${breakPoints.mobile} {
    width: 20px;
    height: 20px;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 18px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const Contents = styled.div`
  padding-top: 10px;
  color: #464747;

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media ${breakPoints.mobile} {
    gap: 5px;
  }
`;

export const EditIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 12px;
    height: 12px;
  }
`;

export const DeleteIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 12px;
    height: 12px;
  }
`;

export const DateString = styled.div`
  color: #464747;
  padding-top: 15px;
  font-size: 12px;
  padding-left: 60px;

  @media ${breakPoints.tablet} {
    padding-left: 50px;
  }

  @media ${breakPoints.mobile} {
    padding-left: 40px;
    font-size: 10px;
    padding-top: 10px;
  }
`;

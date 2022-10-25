import styled from "@emotion/styled";
import { breakPoints } from "../../breakPoints/breakPoints";

export const Wrapper = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    height: 50px;
    padding: 0px 30px;
  }

  @media ${breakPoints.mobile} {
    height: 50px;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1247px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.img`
  height: 50px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    height: 30px;
  }

  @media ${breakPoints.mobile} {
    height: 30px;
  }
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media ${breakPoints.tablet} {
    gap: 10px;
  }

  @media ${breakPoints.mobile} {
    gap: 8px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const ProfileImg = styled.img`
  width: 30px;

  @media ${breakPoints.tablet} {
    width: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 20px;
  }
`;

export const UserName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #464747;
  :hover {
    color: #f39c1f;
  }
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 12px;
    font-weight: 600;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
    font-weight: 600;
  }
`;

export const Authentication = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #464747;
  :hover {
    color: #f39c1f;
  }
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 12px;
    font-weight: 600;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
    font-weight: 600;
  }
`;

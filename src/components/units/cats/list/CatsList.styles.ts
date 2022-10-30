import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/breakPoints/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CatBox = styled.div``;

export const CatImg = styled.img`
  width: 33.33%;
  height: 420px;

  @media ${breakPoints.tablet} {
    height: 250px;
  }

  @media ${breakPoints.mobile} {
    height: 150px;
  }
`;

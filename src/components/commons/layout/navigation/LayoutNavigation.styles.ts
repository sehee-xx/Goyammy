import styled from "@emotion/styled";
import { breakPoints } from "../../breakPoints/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f39c1f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    height: 40px;
  }

  @media ${breakPoints.mobile} {
    height: 30px;
  }
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  font-size: 18px;
  cursor: pointer;
  color: ${(props: { isValid: boolean }) =>
    props.isValid ? "#464747" : "#fff"};
  :hover {
    color: #464747;
  }

  @media ${breakPoints.tablet} {
    margin: 0px 40px;
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    margin: 0px 14px;
    font-size: 8px;
  }
`;

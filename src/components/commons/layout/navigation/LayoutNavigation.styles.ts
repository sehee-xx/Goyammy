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
    padding: 0px 30px;
    height: 40px;
    justify-content: space-between;
  }

  @media ${breakPoints.mobile} {
    padding: 0px 30px;
    height: 35px;
    justify-content: space-between;
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
    margin: 0px;
    font-size: 14px;
    font-weight: 500;
  }

  @media ${breakPoints.mobile} {
    margin: 0px;
    font-size: 10px;
    font-weight: 500;
  }
`;

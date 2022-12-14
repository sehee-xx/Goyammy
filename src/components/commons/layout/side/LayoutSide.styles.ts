import styled from "@emotion/styled";
import { breakPoints } from "../../breakPoints/breakPoints";

export const Wrapper = styled.div`
  width: 155px;
  height: 373px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 730px;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  color: #464747;

  @media ${breakPoints.tablet} {
    display: none;
  }
`;

export const Today = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 15px;
`;

export const TodayItem = styled.img`
  width: 85px;
  height: 85px;
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
